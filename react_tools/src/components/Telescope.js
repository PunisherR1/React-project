import React from "react";

export default function Telescope({ img, title, price }) {
  return (
    <article className="telescope">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="telescope-footer">
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
    </article>
  );
}
