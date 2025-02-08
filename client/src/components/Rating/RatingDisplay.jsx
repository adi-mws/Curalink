
import React from "react";

export default function RatingDisplay({ rating = 2.5 }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i + 1 <= rating) {
      stars.push(<i class="fa-solid fa-star" style={{color:"#EEC521"}}></i>);
    } else if (i + 0.5 === rating) {
      stars.push(<i class="fa-solid fa-star-half-stroke" style={{color:"#EEC521"}}></i>);
    } else {
      stars.push(<i class="fa-regular fa-star" style={{color:"#EDEDED"}}></i>);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}
