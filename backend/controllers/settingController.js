const settingService = require("../services/settingService");

exports.getAllSettings = async (req, res) => {
  try {
    const settings = await settingService.getAllSettings();
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSettingById = async (req, res) => {
  try {
    const setting = await settingService.getSettingById(req.params.id);
    if (!setting) return res.status(404).json({ message: "Setting not found" });
    res.status(200).json(setting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSetting = async (req, res) => {
  try {
    const setting = await settingService.createSetting(req.body);
    res.status(201).json(setting);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSetting = async (req, res) => {
  try {
    const updatedSetting = await settingService.updateSetting(req.params.id, req.body);
    res.status(200).json(updatedSetting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchSetting = async (req, res) => {
  try {
    const patchedSetting = await settingService.patchSetting(req.params.id, req.body);
    res.status(200).json(patchedSetting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSetting = async (req, res) => {
  try {
    await settingService.deleteSetting(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
