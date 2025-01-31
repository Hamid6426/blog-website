const profileService = require("../services/profileService");

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await profileService.getAllProfiles();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProfileByUserId = async (req, res) => {
  try {
    const profile = await profileService.getProfileByUserId(req.params.userId);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedProfile = await profileService.updateProfile(req.params.userId, req.body);
    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    await profileService.deleteProfile(req.params.userId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
