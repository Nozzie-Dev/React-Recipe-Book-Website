import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> {/* bg-dark and variant-dark for dark background */}
      <Container>
        <Navbar.Brand as={Link} to="/">Recipe Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/appetizers">Breakfast Recipes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/main-course">Burger Meal Recipe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/desserts">Desserts Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;