import React from "react";
import "./style.css";

const Footer = () => {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/SarahHawkins26",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/sarah-hawkins-97869b279/",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/22461922/sarahhawkins",
    },
  ];
  return (
    <footer className="d-flex justify-content-center align-items-center">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
