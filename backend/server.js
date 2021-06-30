const express = require("express");

// 1. We initialise express with a variable called app.
const app = express();

// 3. Create a route - app.get means if we get a get request to slash ('/'), then we want to run a fuction that takes in a request and response object (req/res). The we take that res. object and send it to the client, res.send(). This will indicate what will be rended in the browser.
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 2. Take that app and listen on port. Now run in the console to start the server: node backend/server. However to avoid having write this command, we create a script for start, in the root package.json. This way we can run our server with simple: npm start.
app.listen(5000, console.log("Server running on port 5000"));
