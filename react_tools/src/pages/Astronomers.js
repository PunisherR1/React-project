import React from "react";
import Person from "../components/astronomers/Person";
import { useGlobalContext } from "../context";

export default function Astronomers() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <Person />
    </main>
  );
}
