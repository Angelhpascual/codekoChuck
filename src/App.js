import { Switch, Route } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
