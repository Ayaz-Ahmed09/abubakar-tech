// Push events to GTM dataLayer
export const pushEvent = (event, data = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  }
};

// Track page views on route change
export const trackPageView = (path, title) => {
  pushEvent('page_view', {
    page_path: path,
    page_title: title,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaType, location) => {
  pushEvent('cta_click', {
    cta_type: ctaType,   // 'whatsapp', 'call', 'book_now'
    cta_location: location, // 'hero', 'navbar', 'floating', 'service_card'
  });
};

// Track Form Submission
export const trackFormSubmission = (formName, status) => {
  pushEvent('form_submission', {
    form_name: formName,
    form_status: status // 'success', 'error'
  });
};
