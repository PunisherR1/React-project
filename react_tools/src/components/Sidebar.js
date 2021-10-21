/* import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../data";

const Sidebar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <ul className="links">
        {sublinks.map((link, id) => {
          const { page } = link;
          return (
            <li key={id}>
              <a href={"/products"}>{page}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar; */
