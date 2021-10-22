import React from "react";
import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";
import { products } from "../data";

export default function SearchForm() {
  const { searchTerm, setSearchTerm, setTelescopes, setLoading } =
    useGlobalContext();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toString().toLowerCase().includes(searchTerm)
    );
    setTelescopes(results);
  }, [searchTerm, setTelescopes]);
  console.log(setTelescopes);

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
            name="name"
            id="name"
            value={searchTerm}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </form>
    </section>
  );
}
