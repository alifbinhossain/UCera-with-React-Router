import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

//IMPORTING INTERNAL COMPONENTS
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ offset: 250, duration: 900 });
  });

  return (
    <div className="body">
      <Router>
        {/*-------------HEADER---------------*/}
        <Header></Header>
        <Switch>
          {/*-------------HOME---------------*/}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/*-------------ABOUT---------------*/}
          <Route exact path="/about">
            <About></About>
          </Route>
          {/*-------------COURSES---------------*/}
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          {/*-------------CONTACT US---------------*/}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          {/*-------------404---------------*/}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/*-------------FOOTER---------------*/}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
