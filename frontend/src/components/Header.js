import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src="../logo192.png"
                style={{ width: 40, marginTop: -5 }}
              />
              &nbsp;&nbsp;Timber Survival School
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart"></i>&nbsp;Cart
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i>&nbsp;Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
