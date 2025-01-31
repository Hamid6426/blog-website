const likeService = require("../services/likeService");

exports.getAllLikes = async (req, res) => {
  try {
    const likes = await likeService.getAllLikes();
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLikeById = async (req, res) => {
  try {
    const like = await likeService.getLikeById(req.params.id);
    if (!like) return res.status(404).json({ message: "Like not found" });
    res.status(200).json(like);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createLike = async (req, res) => {
  try {
    const like = await likeService.createLike(req.body);
    res.status(201).json(like);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateLike = async (req, res) => {
  try {
    const updatedLike = await likeService.updateLike(req.params.id, req.body);
    res.status(200).json(updatedLike);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchLike = async (req, res) => {
  try {
    const patchedLike = await likeService.patchLike(req.params.id, req.body);
    res.status(200).json(patchedLike);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteLike = async (req, res) => {
  try {
    await likeService.deleteLike(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
