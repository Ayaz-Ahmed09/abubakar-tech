import { Star } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="glass-card rounded-2xl p-6 h-full flex flex-col bg-white">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < review.rating ? "fill-[#FFB800] text-[#FFB800]" : "text-slate-200"} 
          />
        ))}
      </div>
      
      {/* Review Text */}
      <p className="text-slate-700 text-sm italic mb-6 flex-1 relative z-10">
        "{review.text}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lux-100 to-lux-50 flex items-center justify-center text-lux-700 font-bold font-heading text-lg shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lune text-sm">{review.name}</span>
          <span className="text-xs text-slate-500">{review.location} • {review.service}</span>
        </div>
      </div>
    </div>
  );
}
