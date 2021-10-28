import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/menus/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Submenu from "./components/menus/Submenu";
import Sidebar from "./components/menus/Sidebar";
import Astronomers from "./pages/Astronomers";
import Store from "./pages/Store";
import Form from "./pages/Form";

import Auth0ProviderWithHistory from "./components/Auth0Provider.js";

/* Auth0ProviderWithHistory tracks user's session */
/* components before switch component are loaded onto every page */
function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Navbar />
        <Submenu />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/astronomers">
            <Astronomers />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <Form />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
