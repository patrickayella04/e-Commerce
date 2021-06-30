import React from "react";
// Once we paste the navbar code from react-bootstraps site, we then have to import the components/moduals that are used coming from react-bootstraps, such as { Navbar, Nav }. We also delted the form and drop down in the code as we wont need it yet.
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // We use LinkContainer from react-router-bootstap which allows us to wrap bootstrap components, but overall does the same thing as <Link> from react-router-dom.

const Header = () => {
  return (
    <header>
      {/* We changed bg to dark and also had to add varient='dark', otherwise it will dark text on a dark background ---- To move the links to the right, we changed <Nav className="mr-auto"> to <Nav className="ms-auto"> for bootstraps5  */}
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="main-title">Topibex</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
