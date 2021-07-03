import mongoose from "mongoose"; // 1. First thing is to import mongoose which helps us define our schema for documents in our data base (mongoDB). See www.mongoosejs.com to review documentation.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}; // 2. Try- Create a function to connect to the data base, and it has to be asyncronous because when we use mongoDB, ie. when we call .connect() or .find() these methods will always want to return a promise. Thus we use async/await, and wrap the code in a try/catch. In the try we create a variable called conn for connection, and we want to 'await' because mongoose.connect() returns a promise. mongoose.connect() takes in two arguments. The first is our mongo uri from .env. And the second argument is a set of options - with the current versions of mongoose there are a few options we must add otherwise we will get warnings in the console. The options are useUnifiedTopology, useNewUrlParser, and useCreateIndex which are all set to true. Then we console log the connection host (`MongoDB Connected: ${conn.connection.host}`). // Catch - if somehting goes wrong and we cant connect we use a console.error and pass in the 'error' which we iterate a message on it, and then we want to exit - using process.exit(1). We pass in a 1 which means it will exit with 'failure'. And finally we export the module below and bring this functio into our server.js file.

export default connectDB;
