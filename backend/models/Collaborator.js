const mongoose = require("mongoose");

const CollaboratorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  role: { type: String, enum: ["editor", "user"], required: true },
  permissions: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Collaborator", CollaboratorSchema);
