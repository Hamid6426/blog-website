const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");

router.get("/", subscriptionController.getAllSubscriptions);
router.get("/:id", subscriptionController.getSubscriptionById);
router.post("/", subscriptionController.createSubscription);
router.put("/:id", subscriptionController.updateSubscription);
router.delete("/:id", subscriptionController.deleteSubscription);
router.patch("/:id", subscriptionController.patchSubscription);

module.exports = router;
