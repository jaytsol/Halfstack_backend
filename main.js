const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const compression = require("compression");
const dotenv = require("dotenv").config();
const http = require("http");
var fs = require('fs');
var url = require('url');

let app = express();
let PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.get("/", (req, res) => {
  return res.send("Homepage");
});

app.listen(PORT, () => {
  console.log("On sail");
});
