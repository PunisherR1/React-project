import React, { useState, useContext, useEffect } from "react";
import { sublinks, person } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const [telescopes, setTelescopes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [people, setPeople] = useState(person);
  const [index, setIndex] = useState(0);

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

  /* changes state values */
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        telescopes,
        setTelescopes,
        loading,
        setLoading,
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        searchTerm,
        setSearchTerm,
        setIndex,
        index,
        people,
        setPeople,
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
