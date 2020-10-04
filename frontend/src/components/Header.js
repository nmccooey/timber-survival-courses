import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Image
                  src="../logo192.png"
                  style={{ width: 40, marginTop: -5 }}
                />
                &nbsp;&nbsp;Timber Survival School
              </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
              <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>&nbsp;Login
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
