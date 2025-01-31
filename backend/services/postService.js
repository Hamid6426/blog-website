const Post = require("../models/Post");

exports.getAllPosts = async () => {
  return await Post.find().populate("author");
};

exports.getPostById = async (id) => {
  return await Post.findById(id).populate("author");
};

exports.createPost = async (postData) => {
  return await Post.create(postData);
};

exports.updatePost = async (id, postData) => {
  return await Post.findByIdAndUpdate(id, postData, { new: true });
};

exports.deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

exports.patchPost = async (id, postData) => {
  return await Post.findByIdAndUpdate(id, { $set: postData }, { new: true });
};