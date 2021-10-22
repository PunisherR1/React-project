import React from "react";
import { useGlobalContext } from "../context";
import TelescopeList from "../components/TelescopeList";
import SearchForm from "../components/SearchForm";

export default function Products() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <SearchForm />
      <TelescopeList />
    </main>
  );
}
