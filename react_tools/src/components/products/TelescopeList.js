import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import Telescope from "./Telescope";

export default function CocktailList() {
  const { telescopes, loading } = useGlobalContext();
  console.log(telescopes);
  if (loading) {
    return <Loading />;
  }
  if (telescopes.length < 1) {
    return (
      <h2 className="section-title">
        no telescopes matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">telescopes</h2>
      <div className="telescopes-center">
        {/* returns telescope component for every object in array,
         together with it's id and all properties */}
        {telescopes.map((item) => {
          return <Telescope key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
