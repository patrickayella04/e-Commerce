import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
//import products from "../products"; //Stage 2.1 - We bring is useState and useEffect hooks and so we can fetch our products from the backend.

const ProductScreen = ({ match }) => {
  //The goal is get and render a single product. We take products and use .find() which is another high order array method like .map(). (The reason that these are called Higher Order Methods is that they can accept/return another function. Functions are first-class citizens in JavaScript. It is just another way of saying that functions are just like any other type of data, which can be stored, accessed, passed as arguments, and even returned from another method). The find() method executes the function once for each element present in the array. If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values). In this case find() and display the product with the product id that mathces same as the id in the url we navigate to when we click on the link/picture. We retrieve the url id using props.match, and destructure it ({match}) above. We then pull match.params.id to be compared with - We get this from the Route created in App.js where we name the place holder as id. that would be looked at as the params.
  //const product = products.find((p) => p._id === match.params.id); // Stage 2.2 We no longer need this product as we will now fetch from the backend. Our state will be a single product as product is an object inside the array of products.js.
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      //   const res = await axios.get("/api/products");
      //   setProducts(res.data);  - OR destructur res

      const { data } = await axios.get(`/api/products/${match.params.id}`); // state 2.2 bring in back ticks template literals, and bring in props.match as a destructured prop {match} to interate over for the params.id.

      setProduct(data);
      //Now we call the function fetchProducts outside of fetchProducts below.
    };
    fetchProduct();
  }, [match]); // Adding a second argument to useEffect we pass in an array of dependencies - essentially anything that you want to fire off useEffect when it changes - but as for this case we fire off on load so it will be an empty array. (we added match to stop the warning sign in the console saying react useEffect has a missing dependency)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        {/** md{6} medium device The number of columns that will fit next to each other on medium devices (≥768px). */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />{" "}
          {/** fluid stops images from coming out of its container */}
        </Col>
        <Col md={3}>
          {/** variant of flush takes away spacing/border */}
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: £{product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status: </Col>

                  <Col>
                    {/** Open up an express and use a ternary operator to check if the item is in stock to determin the messages relayed in the browser */}
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {/** The button will be disable automatically if there is no stock based on countInStock being equal to 0 */}
                <Button
                  className="addToCart-button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
