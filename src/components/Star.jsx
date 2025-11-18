const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverIn,
  hoverOut,
}) => {
  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverIn(star)}
      onMouseLeave={() => hoverOut(star)}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
