import React from "react";
import "./Contact.css"; //importing css style
import { Col, Form, Row, Button } from "react-bootstrap"; //importing BOOTSTRAP

const Contact = () => {
  return (
    <main className="contact" data-aos="fade">
      <div className="container">
        <div className="contact-heading-box">
          <h2>We’re Here to Help You</h2>
          <p>
            We always want to hear from you! Let us know how we can best help
            you and we'll do our very best.
          </p>
        </div>
        {/*-----------------------INPUT FIELDS--------------------------*/}
        <Form className="full-width mx-auto pb-4">
          <Row xs={1} md={2} className="mb-3">
            <Form.Group className="sm-mb" as={Col} controlId="formGridPassword">
              <Form.Label className="text-white">Full Name</Form.Label>
              <Form.Control type="" placeholder="Full Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className="text-white">Address</Form.Label>
            <Form.Control placeholder="Dhaka,Bangladesh" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Tell us a few words"
              style={{ height: "150px" }}
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
<h1>This is contact</h1>;
