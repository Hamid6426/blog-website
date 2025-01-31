const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

router.get("/", likeController.getAllLikes);
router.get("/:id", likeController.getLikeById);
router.post("/", likeController.createLike);
router.put("/:id", likeController.updateLike);
router.delete("/:id", likeController.deleteLike);
router.patch("/:id", likeController.patchLike);

module.exports = router;
