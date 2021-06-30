const express = require("express");
const products = require("./data/products");

// 1. We initialise express with a variable called app.
const app = express();

// 3. Create a route - app.get means if we get a get request to slash ('/'), then we want to run a fuction that takes in a request and response object (req/res). The we take that res. object and send it to the client, res.send(). This will indicate what will be rended in the browser.
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 4. Now we want to make a request to a new end point for out products.js. Products imported using CommonJs syntax in the products.js file export. We could write res.send, but since is json in products.js, it will be res.json() and pass in products. However even though products.js is actually a javascript array of objects, its not actually json, res.send, or res.json is going to convert the data to the json content type.
app.get("/api/products", (req, res) => {
  res.json(products);
});

// 5. Now we want to create a route to retrieve just a single product based on its id. Using the find() we only display the product with _id that matches the params in the url request. - see frontend/ProductScreen.js file for deeper explanation.
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// 2. Take that app and listen on port. Now run in the console to start the server: node backend/server. However to avoid having write this command, we create a script for start, in the root package.json. This way we can run our server with simple: npm start.
app.listen(5000, console.log("Server running on port 5000"));
