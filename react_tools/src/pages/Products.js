import React from "react";
import { useGlobalContext } from "../context";
import TelescopeList from "../components/products/TelescopeList";
import SearchForm from "../components/products/SearchForm";

export default function Products() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <SearchForm />
      <TelescopeList />
    </main>
  );
}
