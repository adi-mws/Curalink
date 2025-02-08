import React, { useState } from "react";

const RatingInput = ({ totalStars = 5, onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (starValue) => {
    setRating(starValue);
    if (onChange) {
      onChange(starValue);
    }
  };

  return (
    <div className="flex gap-1 text-3xl cursor-pointer">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={<i class="fa-solid fa-star" style={{color:"#EEC521"}}></i>}
            color={starValue <= (hover || rating) ? "#EEC521" : "#EDEDED"}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
    </div>
  );
};

export default RatingInput;

