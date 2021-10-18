import React from "react";
import Products from "../pages/Home";
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
          return <Products key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
