type StarRatingProps = {
  rating: number;
  max?: number;
};

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  const safe = Math.max(0, Math.min(max, Math.round(rating)));

  return (
    <p className="star-rating" aria-label={`${safe} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={
            index < safe ? "star-rating__star is-filled" : "star-rating__star"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </p>
  );
}
