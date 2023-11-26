const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const { auth } = require("./middleware/auth");

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

// App routes
app.get("/", (req, res) => {
  res.send("Welcome to BillSplit API");
});
app.use(require("./routes/login"));

app.use("/api", auth, require("./routes/index"));

module.exports = app;
