// Stage 1 - All of the screens are componets.
import React, { useState, useEffect } from "react";
// Stage 1 - The objective is loop through each product and then output each one. And each one will be its own product component.
//import products from "../products"; Stage 2.1 - we now no longer need this import as we transfer our data to the backend. Initially we start by bringing out products using component level state, that as expansion begins with global state management with Redux, we move to globle level state. So we bring in the useState hook from react. We also import useEffect hook to make a request to our backend.
// Stage 1 - Import Row and column from react bootstrap to provide structure to the page.
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  // Stage. 2.2 What useEffect does is we define it and it takes in an arrow function. And what ever code we put in the function is going to run as soon as the compnent loads. This a form of life cycle. This is where we want to make our axios request, as we want the products to appear as soon as the component loads in the browser.
  useEffect(() => {
    const fetchProducts = async () => {
      //   const res = await axios.get("/api/products");
      //   setProducts(res.data); Stage 2.3 - OR destructur res

      const { data } = await axios.get("/api/products");
      // Stage 2.5 - If you reload the page we wont see any products and inside the console.log you see Get request Error saying 404 (not found). The reason for this is its looking for localhost:3000/api/products as we didn't define it above - we wrote (axios.get("/api/products")) instead of axios.get("localhost:5000/api/products "). But if we did define it like the latter we would recieve a CORS error (cross domain error). So what we must do is add a proxy in the frontend package.json, that will make the request look at localhost:5000 instead of localhost:3000. We ill add "proxy": "http://127.0.0.1:5000" in package.jon for frontend folder. Restart the frontend server to before refreshing the page. We then move to ProductScreen.js to serve the products.js data from the backend too.
      setProducts(data);
      // Stage 2.4 Now we call the function fetchProducts outside of fetchProducts below.
    };
    fetchProducts();
  }, []); // Adding a second argument to useEffect we pass in an array of dependencies - essentially anything that you want to fire off useEffect when it changes - but as for this case we fire off on load so it will be an empty array.

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/** Stage 1 - To avoid the waring in the console "Each child in a list should have a unique "key" prop." , the list of map iterations should have a key on its element which is Col which must be unique - so its value is set to each product _id. because we have access to each product that we loop through */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* Stage 1 - Number of columns per screen size (sm, md, lg, xl) Responsive Grid - dealing with fractions of screen size full size stack being 12 -  */}
            {/* <h3>{product.name}</h3> - instead we now pass in a component that we can style which can take in props. We pass in the product paremeter coming within the arrow function inside the .map, as a prop. The Product component will render the six products */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
