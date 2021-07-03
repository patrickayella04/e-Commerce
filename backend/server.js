import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config(); // 6. We install our dotenv module and bring it in so we can store evironmental variables to protect sensitive information like passwords and user names for our data base accesses, API keys, secrets, token secets etc. Then we create a file .env in the root where we can define any environment variables. Tip whenever you add a new variable inside .env file, you want to restart your local server

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

const PORT = process.env.PORT || 5000; // 7. Below the port was hard coded as 5000 but we bring in our environmental variable using process.env.name of variable. Then we put an OR (||) just incase the environmental variable is not found, then use 5000. We also change the string to a template literal so we can add in the variable port. We also add the mode the server is running in which is the development variable which is NODE_ENV. See insdie terminal it will say "Server running in development mode on port 5000". One Thing to remember if you have sensitive information in the .env file, make sure its in the .gitignore file. So when you push to github or bitbucket you dont want people to see what you have in there.

// 2. Take that app and listen on port. Now run in the console to start the server: node backend/server. However to avoid having write this command, we create a script for start, in the root package.json. This way we can run our server with simple: npm start.
// app.listen(5000, console.log("Server running on port 5000"));
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// 8.  Go to node.js docs to see we have two options for converting from CommonJS which is (require()) syntax to import style syntax (so its the same syntax as our front end module syntax - the one difference however is you have to write .js at the end of your files (not on your packages like exress or dotenv) on the backend, ex. import products from "./data/products.js";  ) which are ECMA script modules or ES modules. Ther are two ways to make this conversion - 1. is to change the file extentions to .mjs or 2. by adding to the root package.json just under "main" field type "type": "module" allowing all files ending in .js extention to be loaded as ES modules, thus allowing you to use import syntax.
