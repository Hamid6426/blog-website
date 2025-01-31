const express = require("express");
const router = express.Router();
const folderController = require("../controllers/folderController");

router.get("/", folderController.getAllFolders);
router.get("/:id", folderController.getFolderById);
router.post("/", folderController.createFolder);
router.put("/:id", folderController.updateFolder);
router.delete("/:id", folderController.deleteFolder);
router.post("/:folderId/addPost/:postId", folderController.addPostToFolder);

module.exports = router;
