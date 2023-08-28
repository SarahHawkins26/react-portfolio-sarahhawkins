import React from "react";

const Resume = () => {
  return (
    <div className="skills">
      <p>
        View my{" "}
        <a href="https://docs.google.com/document/d/e/2PACX-1vQCUvs_82_O64o66Kvf-cBgpl6mXBa5Ytq-L0h3bNc1-U_ezFdELy1K5GARKlEMX_DeSZr8HBagf9fI/pub">
          resume
        </a>
      </p>
      <div className="row mt-5 d-flex">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3>Front-end Proficiencies</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">JavaScript</li>
            <li class="list-group-item">jQuery</li>
            <li class="list-group-item">Responsive Design</li>
            <li class="list-group-item">Bootstrap</li>
            <li class="list-group-item">React</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3>Back-end Proficiencies</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">APIs</li>
            <li class="list-group-item">Node</li>
            <li class="list-group-item">Express</li>
            <li class="list-group-item">MySQL, Sequelize</li>
            <li class="list-group-item">MongoDB, Mongoose</li>
            <li class="list-group-item">REST</li>
            <li class="list-group-item">GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
