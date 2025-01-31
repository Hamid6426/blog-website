const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "Collaborator" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Folder", FolderSchema);
