"use client";

import { Star } from "./Star";
import { useEffect, useState } from "react";

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  reviewCount?: number;
  showReviewCount?: boolean;
}

export function StarRating({
  rating: initialRating,
  maxRating = 5,
  reviewCount: initialReviewCount,
  showReviewCount = true,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(initialRating || 0);
  const [reviewCount, setReviewCount] = useState<number>(
    initialReviewCount || 0
  );

  useEffect(() => {
    // Only generate random values if they weren't provided as props
    if (initialRating === undefined) {
      setRating(Math.floor(Math.random() * maxRating) + 1);
    }

    if (initialReviewCount === undefined && showReviewCount) {
      setReviewCount(Math.floor(Math.random() * 100) + 1);
    }
  }, [initialRating, initialReviewCount, maxRating, showReviewCount]);

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </div>
      {showReviewCount && reviewCount > 0 && (
        <span className="text-xs text-gray-500 ml-1.5">
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}
