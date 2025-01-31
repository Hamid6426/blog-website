const postService = require("../services/postService");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchPost = async (req, res) => {
  try {
    const patchedPost = await postService.patchPost(req.params.id, req.body);
    res.status(200).json(patchedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await postService.deletePost(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.uploadPostImage = async (req, res) => {
  try {
    await imageService.savePostImage(req.params.postId, req.file.path);
    res.send('Post image saved successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving post image');
  }
};

exports.getPostImage = async (req, res) => {
  try {
    const image = await imageService.getPostImage(req.params.postId);
    res.contentType('image/jpeg'); // Adjust based on the image type
    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving post image');
  }
};