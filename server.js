"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(process.env.DBURL, {});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to mongoDB"));

const { getAllFruits, createUserFruits, getUserFruits } = require("./CURD");

// * 1 - TODO: add routes get all fruits  * ✔
app.get("/getFruits", getAllFruits); // req, res
// * 4 - TODO: add routes create the user favorite fruit route * ✔
app.post("/fruit", createUserFruits);
// * TODO: get user favorite fruit route  * ✔
app.get("/fruit", getUserFruits);
app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
