import React from "react";
import "./Header.css"; //import css style
import logo from "../../images/logo.png";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"; //import BOOTSTRAP
import { NavLink } from "react-router-dom"; //import NAV LINK

const Header = () => {
  const activeStyle = {
    fontWeight: "500",
    color: "#f7c04d",
  };
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <NavLink to="/home" className="navbar-brand">
          <img src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto me-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav>
            <NavLink activeStyle={activeStyle} to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              to="/courses"
              className="nav-link"
            >
              Courses
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              to="/contact"
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
