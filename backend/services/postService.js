const Post = require("../models/Post");
const fs = require('fs');

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

// IMAGE RELATED

exports.getPostImage = async (postId) => {
  const post = await Post.findById(postId);
  return post.image;
};

exports.savePostImage = async (postId, imagePath) => {
  const img = fs.readFileSync(imagePath);
  const encode_image = img.toString('base64');
  const buffer = new Buffer.from(encode_image, 'base64');

  const post = await Post.findById(postId);
  post.image = buffer;
  await post.save();
};
