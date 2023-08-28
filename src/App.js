import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./Page";


const pages = ["about", "portfolio", "contact", "resume"];

function App() {
  const [getCurrentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="wrapper">
      <Header
        pages={pages}
        getCurrentPage={getCurrentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <Page 
        getCurrentPage={getCurrentPage}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
