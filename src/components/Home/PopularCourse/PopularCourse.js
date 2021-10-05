import React from "react";
import "./PopularCourse.css";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const PopularCourse = (props) => {
  const { course } = props;
  const {
    instructor,
    img,
    category,
    courseTitle,
    level,
    rating,
    enrolled,
    price,
  } = course;
  return (
    <Card className="popular-course" data-aos="fade-left">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="popular-course-category">{category}</p>
          <p className="popular-course-level">{level}</p>
        </div>
        <h5 className="popular-course-title">{courseTitle}</h5>
        <p className="popular-course-instructor">Instructor : {instructor}</p>
        <div className="popular-course-review d-flex justify-content-between align-items-center">
          <p>
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
        {price ? (
          <p className="popular-course-price mt-auto">$ {price}</p>
        ) : (
          <p className="popular-course-price-free mt-auto">Free</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default PopularCourse;
