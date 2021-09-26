// * TODO: 3 create a new Schema for the fruit api database ✔
const mongoose = require("mongoose");
const fruitSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  email: String,
});
// const myModel = mongoose.model("Fruit", fruitSchema);
// module.exports = myModel;
module.exports = mongoose.model("Fruit", fruitSchema);
