const folderService = require("../services/folderService");

exports.getAllFolders = async (req, res) => {
  try {
    const folders = await folderService.getAllFolders();
    res.status(200).json(folders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFolderById = async (req, res) => {
  try {
    const folder = await folderService.getFolderById(req.params.id);
    if (!folder) return res.status(404).json({ message: "Folder not found" });
    res.status(200).json(folder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFolder = async (req, res) => {
  try {
    const folder = await folderService.createFolder(req.body);
    res.status(201).json(folder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateFolder = async (req, res) => {
  try {
    const updatedFolder = await folderService.updateFolder(req.params.id, req.body);
    res.status(200).json(updatedFolder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    await folderService.deleteFolder(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPostToFolder = async (req, res) => {
  try {
    await folderService.addPostToFolder(req.params.folderId, req.params.postId);
    res.status(200).json({ message: "Post added to folder" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
