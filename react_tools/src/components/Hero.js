import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>Various tools for amateur and professional astronomers</h1>
            <p className="hero-p">
              Millions of astronomers—from professionals to amateurs use Space’s
              products to capture amazing sights of our Galaxy and share them
              online among fellow enthusiasts.
            </p>
            <Link to="/products">
              <button className="btn btn-long">Show</button>
            </Link>
          </article>
          <article className="hero-images"></article>
        </div>
      </section>
    </main>
  );
};

export default Hero;
