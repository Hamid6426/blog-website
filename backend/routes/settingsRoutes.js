const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settingsController");

router.get("/", settingsController.getAllSettings);
router.get("/:id", settingsController.getSettingsById);
router.post("/", settingsController.createSettings);
router.put("/:id", settingsController.updateSettings);
router.delete("/:id", settingsController.deleteSettings);
router.patch("/:id", settingsController.patchSettings);

module.exports = router;
