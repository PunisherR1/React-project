import React from "react";
import logo from "../images/space_logo_white.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, toggleLinks } = useGlobalContext();
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 10;
    openSubmenu(page, { center, bottom });
    if (e.target.getElementsByTagName("a")) {
      const bottom = tempBtn.bottom + 10;
      openSubmenu(page, { center, bottom });
    }
  };

  const handleSubmenu = (e) => {
    if (
      !e.target.classList.contains("link-btn") &&
      !e.target.getElementsByTagName("a")
    ) {
      closeSubmenu();
    }
  };
  const showSideMenu = () => {
    toggleLinks();
  };

  const toggleSubmenu = (e) => {
    console.log(1);
    return (
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  };

  return (
    <header>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                <Link to="/products">products</Link>
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                astronomers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                contact
              </button>
            </li>
          </ul>
          {!isLoading && !user && (
            <button
              className="btn signin-btn"
              onClick={() => loginWithRedirect()}
            >
              Log in / Sign up
            </button>
          )}
          {!isLoading && user && (
            <div className="links-flex-column">
              {/* <p>{user.name}</p>
              <button className="btn signin-btn" onClick={() => logout()}>
                Log out
              </button> */}
              <Link to="/profile">
                <p className="login-name" alt="" onClick={toggleSubmenu}>
                  {user.name}
                </p>
              </Link>
              <button className="btn" onClick={() => logout()}>
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
