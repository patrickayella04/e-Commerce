import React from "react";
// Once we paste the navbar code from react-bootstraps site, we then have to import the components/moduals that are used coming from react-bootstraps, such as { Navbar, Nav }. We also delted the form and drop down in the code as we wont need it yet.
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      {/* We changed bg to dark and also had to add varient='dark', otherwise it will dark text on a dark background ---- To move the links to the right, we changed <Nav className="mr-auto"> to <Nav className="ms-auto"> for bootstraps5  */}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Topibex-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
