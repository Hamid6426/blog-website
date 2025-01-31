const Like = require("../models/Like");

exports.getAllLikes = async () => {
  return await Like.find();
};

exports.getLikeById = async (id) => {
  return await Like.findById(id);
};

exports.createLike = async (likeData) => {
  return await Like.create(likeData);
};

exports.updateLike = async (id, likeData) => {
  return await Like.findByIdAndUpdate(id, likeData, { new: true });
};

exports.deleteLike = async (id) => {
  return await Like.findByIdAndDelete(id);
};

exports.patchLike = async (id, likeData) => {
  return await Like.findByIdAndUpdate(id, { $set: likeData }, { new: true });
};
