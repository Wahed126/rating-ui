import { use, useState } from "react";
import Star from "./Star";
const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submited, setSubmited] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const handleSubmit = () => {
    rating > 0 ? setSubmited(true) : setSubmited(false);
  };
  const closeModal = () => {
    setSubmited(false);
    setRating(0);
    setHover(0);
  };
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverIn={setHover}
            hoverOut={() => setHover(null)}
            key={star}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      {/* Modal */}
      {submited && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank you</h2>
            <p>
              You rated us {rating} star{rating > 1 ? "s" : ""}
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
