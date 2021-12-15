import React, { useState, useContext } from "react";
import { person } from "./data/person_data";
import { sublinks } from "./data/menus_data";

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

  /* changes state values if text value of page property
  is the same as the text values in navbar*/
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
