import React from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import { capitalize } from "../utils";
import './style.css';

const Page = ({ getCurrentPage }) => {
  const renderPage = (page) => {
    switch (page) {
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section className="container">
      <h2 className="mb-3"> {capitalize(getCurrentPage)}</h2>
      {renderPage(getCurrentPage)}
    </section>
  );
};

export default Page;
