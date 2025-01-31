const Settings = require("../models/Settings");

exports.getAllSettings = async () => {
  return await Settings.find();
};

exports.getSettingsById = async (id) => {
  return await Settings.findById(id);
};

exports.createSettings = async (settingData) => {
  return await Settings.create(settingData);
};

exports.updateSettings = async (id, settingData) => {
  return await Settings.findByIdAndUpdate(id, settingData, { new: true });
};

exports.deleteSettings = async (id) => {
  return await Settings.findByIdAndDelete(id);
};

exports.patchSettings = async (id, settingData) => {
  return await Settings.findByIdAndUpdate(id, { $set: settingData }, { new: true });
};
