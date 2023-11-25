const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("./config/db");
require("dotenv").config();

// Prepare express app
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// Serve static files

// Internal routes
const internalRouter = new express.Router();

// App routes
app.get("/", (req, res) => {
  res.send("Welcome to BillSplit API");
});
app.use("/api", require("./routes/login"));

module.exports = app;
