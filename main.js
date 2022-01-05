const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const compression = require("compression");
const dotenv = require("dotenv").config();

let app = express();
let PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.listen(PORT, () => {
  console.log("On sail");
});
