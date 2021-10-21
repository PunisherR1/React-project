import React from "react";
import { products } from "../data";
import { useGlobalContext } from "../context";

export default function CocktailList() {
  const { telescopes } = useGlobalContext();
  /* if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  } */
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {products.map((item) => {
          const { id, title, price, img } = item;
          return (
            <article className="cocktail" key={id}>
              <div className="img-container ">
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
        })}
      </div>
    </section>
  );
}
