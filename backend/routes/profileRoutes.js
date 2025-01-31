const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/", profileController.getAllProfiles);
router.get("/:userId", profileController.getProfileByUserId);
router.post("/", profileController.createProfile);
router.put("/:userId", profileController.updateProfile);
router.delete("/:userId", profileController.deleteProfile);

router.get('/image/profilePicture/:profileId', profileController.getProfilePicture);
router.post('/upload/profilePicture/:profileId', upload.single('image'), profileController.uploadProfilePicture);

module.exports = router;

