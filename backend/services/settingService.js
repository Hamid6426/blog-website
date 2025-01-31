const Setting = require("../models/Setting");

exports.getAllSettings = async () => {
  return await Setting.find();
};

exports.getSettingById = async (id) => {
  return await Setting.findById(id);
};

exports.createSetting = async (settingData) => {
  return await Setting.create(settingData);
};

exports.updateSetting = async (id, settingData) => {
  return await Setting.findByIdAndUpdate(id, settingData, { new: true });
};

exports.deleteSetting = async (id) => {
  return await Setting.findByIdAndDelete(id);
};

exports.patchSetting = async (id, settingData) => {
  return await Setting.findByIdAndUpdate(id, { $set: settingData }, { new: true });
};
