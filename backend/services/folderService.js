const Folder = require("../models/Folder");

exports.getAllFolders = async () => {
  return await Folder.find().populate("owner").populate("collaborators").populate("posts");
};

exports.getFolderById = async (id) => {
  return await Folder.findById(id).populate("owner").populate("collaborators").populate("posts");
};

exports.createFolder = async (folderData) => {
  return await Folder.create(folderData);
};

exports.updateFolder = async (id, folderData) => {
  return await Folder.findByIdAndUpdate(id, folderData, { new: true });
};

exports.deleteFolder = async (id) => {
  return await Folder.findByIdAndDelete(id);
};

exports.addPostToFolder = async (folderId, postId) => {
  const folder = await Folder.findById(folderId);
  folder.posts.push(postId);
  await folder.save();
};
