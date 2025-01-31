const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
  siteTitle: { type: String, required: true },
  logo: { type: String },
  metaDescription: { type: String },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Settings", SettingsSchema);
