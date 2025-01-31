const express = require("express");
const multer = require('multer');
const postController = require("../controllers/postController");

const upload = multer({ dest: 'uploads/post/' });
const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.patch("/:id", postController.patchPost);

router.get('/image/postImage/:postId', postController.getPostImage);
router.post('/upload/postImage/:postId', upload.single('image'), postController.uploadPostImage);

module.exports = router;
