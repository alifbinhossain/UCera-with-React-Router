import React from "react";
import "./Course.css"; //import css style
import { Card } from "react-bootstrap"; //import BOOTSTRAP
import Rating from "react-rating"; //import RATING

const Course = (props) => {
  const { course } = props;
  const {
    instructor,
    img,
    category,
    courseTitle,
    level,
    rating,
    enrolled,
    duration,
    price,
  } = course;
  return (
    <Card className="course" data-aos="zoom-in">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <p className="course-category">{category}</p>
          <p className="course-level">{level}</p>
        </div>
        <h5 className="course-title">{courseTitle}</h5>
        <p className="course-instructor">Instructor : {instructor}</p>
        <div className="d-flex align-items-center justify-content-between">
          <p className="course-duration">
            <i className="far fa-clock me-2"></i>
            {duration}hr
          </p>
          {price ? (
            <p className="course-price mt-auto">$ {price}</p>
          ) : (
            <p className="course-price-free mt-auto">Free</p>
          )}
        </div>
        <div className="course-review d-flex justify-content-between align-items-center">
          <p className="rating">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star star-icon"
              fullSymbol="fas fa-star star-icon"
            ></Rating>
          </p>
          <p className="users-icon">
            <i className="fas fa-users"></i> {enrolled}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Course;
