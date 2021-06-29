// All of the screens are componets.
import React from "react";
// The objective is loop through each product and then output each one. And each one will be its own product component.
import products from "../products";
// Import Row and column from react bootstrap to provide structure to the page.
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/** To avoid the waring in the console "Each child in a list should have a unique "key" prop." , the list of map iterations should have a key on its element which is Col which must be unique - so its value is set to each product _id. because we have access to each product that we loop through */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* Number of columns per screen size (sm, md, lg, xl) Responsive Grid - dealing with fractions of screen size full size stack being 12 -  */}
            {/* <h3>{product.name}</h3> - instead we now pass in a component that we can style which can take in props. We pass in the product paremeter coming within the arrow function inside the .map, as a prop. The Product component will render the six products */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
