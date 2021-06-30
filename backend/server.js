const express = require("express");

// We initialise express with a variable called app.
const app = express();

// Take that app and listen on port. Now run in the console to start the server: node backend/server. However to avoid having write this command, we create a script for start, in the root package.json. This way we can run our server with simple: npm start.
app.listen(5000, console.log("Server running on port 5000"));
