import React, { useState } from "react";
import { Switch, Route } from "react-router";
import Dropdown from "./components/Dropdown/Dropdown";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Quotes from "./pages/quotes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/quotes" exact component={Quotes} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
