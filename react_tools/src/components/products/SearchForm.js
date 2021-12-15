import React, { useMemo } from "react";
import { useGlobalContext } from "../../context";
import { useRef, useEffect } from "react";
import { products } from "../../data";

export default function SearchForm() {
  const { searchTerm, setSearchTerm, setTelescopes, setLoading, telescopes } =
    useGlobalContext();

  const refContainer = useRef(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /* returns products which are represented by letters in search bar */
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toString().toLowerCase().includes(searchTerm)
    );
    setTelescopes(results);
    setLoading(false);
  }, [searchTerm, setTelescopes, setLoading]);
  console.log(setTelescopes);

  const calculateMostExpensive = (data) => {
    return data.reduce((total, item) => {
      const price = item.price;
      if (price >= total) {
        total = price;
        console.log(total);
      }
      return total;
    }, 0);
  };

  /* calculates most expensive item every time telescope array is changed */
  const mostExpensive = useMemo(
    () => calculateMostExpensive(telescopes),
    [telescopes]
  );

  /* clears the search bar when switching pages */
  useEffect(() => {
    refContainer.current.focus();
    setSearchTerm("");
  }, [setSearchTerm]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite telescope</label>
          <input
            type="text"
            ref={refContainer}
            name="name"
            id="name"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
      <h3 className="most-exp">Most Expensive: ${mostExpensive}</h3>
    </section>
  );
}
