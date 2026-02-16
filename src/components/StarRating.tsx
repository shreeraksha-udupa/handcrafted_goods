import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
}

const StarRating = ({ rating, maxRating = 5, size = 16, showValue = false, reviewCount }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-accent text-accent" : half ? "fill-accent/50 text-accent" : "text-border"}
          />
        );
      })}
      {showValue && <span className="text-sm text-muted-foreground ml-1">{rating.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      )}
    </div>
  );
};

export default StarRating;
