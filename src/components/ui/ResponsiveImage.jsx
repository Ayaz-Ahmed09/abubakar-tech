'use client';

function getVariantPath(src, width, format) {
  const queryIndex = src.indexOf('?');
  const cleanSrc = queryIndex === -1 ? src : src.slice(0, queryIndex);
  const query = queryIndex === -1 ? '' : src.slice(queryIndex);
  const extensionIndex = cleanSrc.lastIndexOf('.');

  if (extensionIndex === -1) {
    return src;
  }

  return `${cleanSrc.slice(0, extensionIndex)}-${width}.${format}${query}`;
}

function getSrcSet(src, widths, format) {
  return widths
    .map((width) => `${getVariantPath(src, width, format)} ${width}w`)
    .join(', ');
}

export default function ResponsiveImage({
  src,
  alt,
  widths = [360, 540, 720, 900],
  sizes,
  className,
  pictureClassName = 'block h-full w-full',
  ...props
}) {
  return (
    <picture className={pictureClassName}>
      <source
        type="image/avif"
        srcSet={getSrcSet(src, widths, 'avif')}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={getSrcSet(src, widths, 'webp')}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
}
