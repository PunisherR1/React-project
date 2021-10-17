import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useContext, useEffect } from "react";
import { sublinks } from "./data";
import { useCallback } from "react";
import { useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const [telescopes, setTelescopes] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  /*   const linksRef = useRef(null);
  const linksContainerRef = useRef(null); */

  /* const toggleLinks = () => {
    setShowLinks(!showLinks);
    return (
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {user.map((user, index) => {
            const { id, name, email } = user;
            return (
              <li key={index} {...user}>
                <a href="#">{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }; */

  /* useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]); */

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        telescopes,
        setTelescopes,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        /*  toggleLinks,
        linksContainerRef,
        linksRef, */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
