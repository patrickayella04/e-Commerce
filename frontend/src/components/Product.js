import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  {
    /** We could pass props in the arrow function but then it would be written as props.products for each time we call it below. Instead we use brackets in the arrow function for destructuring which allow the prop to be passed it directly thus only having to write product for each time its called. */
  }
  {
    /** my-3 increased margin p-3 increased padding rounded for radius of corners in react-bootstraps */
  }
  return (
    <Card className="my-3 p-3 rounded">
      {/** We wrap the product image inside of a link - but when the react router is implamented it will be a link tag instead of an a tag - If you see the id changes each time in the url link if you click on the picture.  */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        {/**  variant -top allows us to place image in different areas */}
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            {/** as="div" is where we can choose the element type for this Card.Title component */}
            <strong> {product.name} </strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          {/** Rating takes in two props */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          {/** We could pass in color='red' into Rating component above, but instead of passing a color there is a default color in yellow for the stars. See in /Rating.js component below export to for default prop value */}
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
