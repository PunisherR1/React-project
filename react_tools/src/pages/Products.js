import React from "react";
import { products } from "../data";
import { useGlobalContext } from "../context";

export default function Products({ id, title, price, img }) {
  const { telescopes } = useGlobalContext();
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="cocktail-footer">
        <h3>{title}</h3>
        <h4>{price}</h4>
        {/* <p>{info}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            details
          </Link> */}
      </div>
    </article>
  );
}
