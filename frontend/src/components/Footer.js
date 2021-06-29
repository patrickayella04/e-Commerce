import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Row and Col for bootstraps grid css
const Footer = () => {
  return (
    <footer>
      <Container>
        {/* Row with a singls column */}
        <Row>
          {/* Class name initiates css attributes, text-center puts text in the center, and py is padding on the y axis  -- all other custom styles will go in index.css file*/}
          <Col className="text-center py-3">Copyright &copy; TopibexShop</Col>
        </Row>
      </Container>
      ;
    </footer>
  );
};

export default Footer;
