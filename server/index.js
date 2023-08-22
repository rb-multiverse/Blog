const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

// connect db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB has been started successfully");
  })
  .catch((error) => {
    console.error("Error starting MongoDB:", error);
  });

// connect server
app.listen(process.env.PORT, () =>
  console.log("Server has been started successfully")
);
