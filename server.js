const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
require("dotenv").config();

const db = require("./db/index");
const dataRouter = require("./rout_ctrl/product_ctrl");

const apiPort = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/api", dataRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
