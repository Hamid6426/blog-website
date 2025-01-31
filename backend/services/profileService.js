const Profile = require("../models/Profile");

exports.getAllProfiles = async () => {
  return await Profile.find().populate("user");
};

exports.getProfileByUserId = async (userId) => {
  return await Profile.findOne({ user: userId }).populate("user");
};

exports.createProfile = async (profileData) => {
  return await Profile.create(profileData);
};

exports.updateProfile = async (userId, profileData) => {
  return await Profile.findOneAndUpdate({ user: userId }, profileData, { new: true });
};

exports.deleteProfile = async (userId) => {
  return await Profile.findOneAndDelete({ user: userId });
};
