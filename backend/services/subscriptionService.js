const Subscription = require("../models/Subscription");

exports.getAllSubscriptions = async () => {
  return await Subscription.find();
};

exports.getSubscriptionById = async (id) => {
  return await Subscription.findById(id);
};

exports.createSubscription = async (subscriptionData) => {
  return await Subscription.create(subscriptionData);
};

exports.updateSubscription = async (id, subscriptionData) => {
  return await Subscription.findByIdAndUpdate(id, subscriptionData, { new: true });
};

exports.deleteSubscription = async (id) => {
  return await Subscription.findByIdAndDelete(id);
};

exports.patchSubscription = async (id, subscriptionData) => {
  return await Subscription.findByIdAndUpdate(id, { $set: subscriptionData }, { new: true });
};
