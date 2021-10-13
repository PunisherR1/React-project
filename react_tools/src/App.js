import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
