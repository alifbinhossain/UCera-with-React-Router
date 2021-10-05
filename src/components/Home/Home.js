import React from "react";
import "./Home.css"; //import css style
import { useState } from "react";
import { useEffect } from "react";
import { Col, FormControl, Row } from "react-bootstrap"; //import BOOTSTRAP
import PopularCourse from "./PopularCourse/PopularCourse"; //import POPULAR COURSE component
import { useHistory } from "react-router";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  courses.length = 6;
  const viewAllCourse = () => {
    history.push("/courses");
  };

  return (
    <main>
      <section className="home">
        <div className="header-home">
          <div className="header-info">
            <p data-aos="fade">Learn from the best</p>
            <h1>
              Change your Life,
              <br /> Join Millions of Learner.
            </h1>
            <button onClick={viewAllCourse} className="btn btn-warning mt-3">
              Discover Our Courses
            </button>
          </div>
        </div>

        <div className="courses-home container mt-0 py-5">
          <h2 className="mb-4">Popular Courses</h2>
          <hr className="line" />
          <Row xs={1} md={3} className="g-4">
            {courses.map((course) => (
              <Col>
                <PopularCourse key={course.id} course={course}></PopularCourse>
              </Col>
            ))}
          </Row>
          <button
            onClick={viewAllCourse}
            className="btn btn-success d-block mx-auto mt-4"
          >
            View All Courses
          </button>
        </div>
        <div className="alert-home m-0">
          <h2>Are you ready to take the next step toward your future?</h2>
          <FormControl
            className="mt-3 full-width"
            placeholder="Give us your feedback"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
