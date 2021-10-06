import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

//IMPORTING INTERNAL COMPONENTS
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { useEffect } from "react";
import { GridLoader, ScaleLoader } from "react-spinners";

const override = css``;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({ offset: 160, duration: 900, delay: 200 });
  });
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box">
          <GridLoader
            loading={loading}
            size={15}
            color="#f7d919"
            css={override}
          />
        </div>
      ) : (
        <div className="body" data-aos="zoom-in">
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
      )}
    </>
  );
}

export default App;
