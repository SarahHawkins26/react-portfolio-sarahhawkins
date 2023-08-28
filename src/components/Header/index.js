import React from "react";
import Nav from '../Nav';
import './style.css';

const Header = ({ pages, getCurrentPage, setCurrentPage }) => {
  return (
    <header>
      {/* <img /> */}
      <div className="container d-lg-flex justify-content-lg-between">
        <h1 className="text-center">Sarah Hawkins</h1>
        <Nav
          pages={pages}
          getCurrentPage={getCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
