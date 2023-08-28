import React from "react";
import { capitalize } from "../../utils";
import './style.css';

const Nav = ({ pages, getCurrentPage, setCurrentPage }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      {pages.map((page) => (
        <a
          href="/#"
          key={page}
          className={`nav-link ${page === getCurrentPage && "active"}`}
          onClick={() => setCurrentPage(page)}
        >
          {capitalize(page)}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
