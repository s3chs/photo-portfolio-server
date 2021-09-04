const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
  picture: String,
  category: String,
});

const PictureModel = mongoose.model("pictures", PictureSchema);

module.exports = PictureModel;
