const settingsService = require("../services/settingsService");

exports.getAllSettings = async (req, res) => {
  try {
    const settings = await settingsService.getAllSettings();
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSettingsById = async (req, res) => {
  try {
    const settings = await settingsService.getSettingsById(req.params.id);
    if (!settings) return res.status(404).json({ message: "Settings not found" });
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSettings = async (req, res) => {
  try {
    const settings = await settingsService.createSettings(req.body);
    res.status(201).json(settings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const updatedSettings = await settingsService.updateSettings(req.params.id, req.body);
    res.status(200).json(updatedSettings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchSettings = async (req, res) => {
  try {
    const patchedSettings = await settingsService.patchSettings(req.params.id, req.body);
    res.status(200).json(patchedSettings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSettings = async (req, res) => {
  try {
    await settingsService.deleteSettings(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
