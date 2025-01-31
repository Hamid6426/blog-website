const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Category", CategorySchema);
