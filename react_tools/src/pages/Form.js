import React from "react";
import FormContainer from "../components/FormContainer";
import { useGlobalContext } from "../context";

export default function Form() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <FormContainer />
    </main>
  );
}
