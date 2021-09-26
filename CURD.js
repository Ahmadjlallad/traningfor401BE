"use strict";
const { default: axios } = require("axios");
const FruitModel = require("./Model");
// TODO: 2  * send all fruits to the user ✔
const getAllFruits = async (_, res) => {
  try {
    const fruitResponse = await axios.get(
      "https://fruit-api-301.herokuapp.com/getFruit"
    );
    res.send(fruitResponse.data);
  } catch (err) {
    res.send(err);
  }
};
// * TODO: 5 * create a new favorite fruit for the logged in user ✔
const createUserFruits = async (req, res) => {
  console.log(req.body);
  try {
    await FruitModel.create(req.body);
    res.send("saved to your favorite");
  } catch (err) {
    res.send(err);
  }
};
// * TODO: 7 get user favorite fruits ✔
const getUserFruits = async (req, res) => {
  try {
    const userFruits = await FruitModel.find({ email: req.query.email });
    res.send(userFruits);
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  getAllFruits,
  createUserFruits,
  getUserFruits,
};
