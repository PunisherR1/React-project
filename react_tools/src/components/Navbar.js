import React from "react";
import logo from "../images/space_logo_white.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
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
          <button className="btn signin-btn">Log in / Sign up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
