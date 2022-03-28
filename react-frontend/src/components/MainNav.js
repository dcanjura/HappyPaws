import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNav = ({ typeUser }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-cust mb-5"
    >
      <Container>
        <Navbar.Brand href="/">Happy Paws</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/users">Usuarios</Nav.Link>
            <Nav.Link href="/organizations">Organizaciones</Nav.Link>
            <Nav.Link href="/pets">Animalitos</Nav.Link>
            <NavDropdown title="¡Sé la ayuda!" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/pets">Animalitos</NavDropdown.Item>
              <NavDropdown.Item href="/organizations">
                Organizaciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Localidades
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <img
              src="../mutimedia/gojou.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Profile pic"
            />
            <Navbar.Text>
              <a href="">Master Chief</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
