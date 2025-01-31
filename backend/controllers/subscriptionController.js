const subscriptionService = require("../services/subscriptionService");

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.status(200).json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSubscriptionById = async (req, res) => {
  try {
    const subscription = await subscriptionService.getSubscriptionById(req.params.id);
    if (!subscription) return res.status(404).json({ message: "Subscription not found" });
    res.status(200).json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSubscription = async (req, res) => {
  try {
    const subscription = await subscriptionService.createSubscription(req.body);
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const updatedSubscription = await subscriptionService.updateSubscription(req.params.id, req.body);
    res.status(200).json(updatedSubscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchSubscription = async (req, res) => {
  try {
    const patchedSubscription = await subscriptionService.patchSubscription(req.params.id, req.body);
    res.status(200).json(patchedSubscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    await subscriptionService.deleteSubscription(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
