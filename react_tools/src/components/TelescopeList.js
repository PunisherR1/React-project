import React from "react";
import { products } from "../data";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Telescope from "./Telescope";
import SearchForm from "./SearchForm";

export default function CocktailList() {
  const { telescopes, loading } = useGlobalContext();
  console.log(telescopes);
  if (loading) {
    return <Loading />;
  }
  if (telescopes.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="telescopes-center">
        {telescopes.map((item) => {
          return <Telescope key={item.id} {...item} />;
        })}
      </div>
    </section>
  );

  /* return (
    <section className="section">
      <h2 className="section-title">telescopes</h2>
      <div className="telescopes-center">
        {products.map((item) => {
          const { id, title, price, img } = item;
          return (
            <article className="telescope" key={id}>
              <div className="img-container ">
                <img src={img} alt={title} />
              </div>
              <div className="cocktail-footer">
                <h3>{title}</h3>
                <h4>{price}</h4>
                {/* <p>{info}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            details
          </Link> */
}
/* /div>
            </article>
          );
        })}
      </div>
    </section>
  );
} */
