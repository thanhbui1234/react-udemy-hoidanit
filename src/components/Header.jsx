import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-header ">
      <Container>
        <Navbar.Brand>
          <NavLink className="nav-link" to="/">
            Chí Thanh
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              home
            </NavLink>
            <NavLink className="nav-link" to="/admin">
              admin
            </NavLink>
            <NavLink className="nav-link" to="/user">
              user
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign up</button>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
