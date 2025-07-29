const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const catsRouter = require("./cats/cats.router");

const app = express();

app.use(cors());
app.use(express.json());
app.set('json spaces', 2);

app.use("/cats", catsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;