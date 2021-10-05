import React from "react";
import "./Member.css"; //importin css style
import { Card } from "react-bootstrap"; //importing BOOTSTRAP

const Member = (props) => {
  const { member } = props;
  const { email, jobTitle, fullName, img } = member;
  return (
    <Card className="team-member border-0" data-aos="fadeInUp">
      <div className="img-box">
        <Card.Img variant="top" src={img} />
        <p className="hide-email">email: {email}</p>
      </div>

      <Card.Body>
        <h6>{fullName}</h6>
        <p>{jobTitle}</p>
      </Card.Body>
    </Card>
  );
};

export default Member;
