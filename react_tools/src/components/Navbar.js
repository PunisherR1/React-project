import React from "react";
import logo from "../images/space_logo_white.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
/* import { FaBars } from "react-icons/fa"; */
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, toggleSidebar } = useGlobalContext();
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const width = window.innerWidth;

  /* Calculates how close will submenu be to the nav bar */
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 10;
    openSubmenu(page, { center, bottom });
  };

  /* closes submenu when mouse moves elsewhere */
  const handleSubmenu = (e) => {
    if (
      !e.target.classList.contains("link-btn") &&
      !document.getElementsByTagName("a")
    ) {
      console.log(handleSubmenu);
      closeSubmenu();
    }
    if (width < 1000) {
      closeSubmenu();
    }
  };
  /* const showSideMenu = () => {
    toggleLinks();
  }; */

  return (
    <header>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={logo}
                className="nav-logo"
                alt="logo"
                onMouseOver={closeSubmenu}
              />
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
          {/* displaying based on, if user is logged in or logged out */}
          {!isLoading && !user && (
            <div onMouseOver={closeSubmenu}>
              <button
                className="btn signin-btn"
                onClick={() => loginWithRedirect()}
              >
                Log in / Sign up
              </button>
            </div>
          )}
          {!isLoading && user && (
            <div className="links-flex-column" onMouseOver={closeSubmenu}>
              <Link to="/profile">
                <p className="nav-name">{user.name}</p>
              </Link>
              <button className="btn signin-btn" onClick={() => logout()}>
                Logout
              </button>
            </div>
          )}
        </div>
        <button onClick={toggleSidebar} className="nav-toggle">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
