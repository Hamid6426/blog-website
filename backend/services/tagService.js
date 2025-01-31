const Tag = require("../models/Tag");

exports.getAllTags = async () => {
  return await Tag.find();
};

exports.getTagById = async (id) => {
  return await Tag.findById(id);
};

exports.createTag = async (tagData) => {
  return await Tag.create(tagData);
};

exports.updateTag = async (id, tagData) => {
  return await Tag.findByIdAndUpdate(id, tagData, { new: true });
};

exports.deleteTag = async (id) => {
  return await Tag.findByIdAndDelete(id);
};

exports.patchTag = async (id, tagData) => {
  return await Tag.findByIdAndUpdate(id, { $set: tagData }, { new: true });
};
