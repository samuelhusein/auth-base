import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const Sidebar = () => {
  const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Auth-Base</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            {user.username && (
              <Nav.Link>
                <NavLink to="/profile">Profile</NavLink>
              </Nav.Link>
            )}

            <Nav.Link>
              <NavLink to="/about">About (Need Permission)</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/extra">Extra (Need Permission)</NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {!user.username && (
                <Nav.Link>
                  <NavLink to="/login">Login</NavLink>
                </Nav.Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
