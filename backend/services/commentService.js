const Comment = require("../models/Comment");

exports.getAllComments = async () => {
  return await Comment.find();
};

exports.getCommentById = async (id) => {
  return await Comment.findById(id);
};

exports.createComment = async (commentData) => {
  return await Comment.create(commentData);
};

exports.updateComment = async (id, commentData) => {
  return await Comment.findByIdAndUpdate(id, commentData, { new: true });
};

exports.deleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};

exports.patchComment = async (id, commentData) => {
  return await Comment.findByIdAndUpdate(id, { $set: commentData }, { new: true });
};
