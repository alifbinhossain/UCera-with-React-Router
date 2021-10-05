import React from "react";
import "./Member.css"; //importin css style
import { Card } from "react-bootstrap"; //importing BOOTSTRAP

const Member = (props) => {
  const { member } = props;
  const { jobTitle, fullName, img } = member;
  return (
    <Card className="team-member border-0" data-aos="fadeInUp">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <h6>{fullName}</h6>
        <p>{jobTitle}</p>
      </Card.Body>
    </Card>
  );
};

export default Member;
