import React from "react";
import { useGlobalContext } from "../context";
import TelescopeList from "../components/TelescopeList";

export default function Products() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <TelescopeList />
    </main>
  );
}
