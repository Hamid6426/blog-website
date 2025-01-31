const tagService = require("../services/tagService");

exports.getAllTags = async (req, res) => {
  try {
    const tags = await tagService.getAllTags();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTagById = async (req, res) => {
  try {
    const tag = await tagService.getTagById(req.params.id);
    if (!tag) return res.status(404).json({ message: "Tag not found" });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTag = async (req, res) => {
  try {
    const tag = await tagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTag = async (req, res) => {
  try {
    const updatedTag = await tagService.updateTag(req.params.id, req.body);
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.patchTag = async (req, res) => {
  try {
    const patchedTag = await tagService.patchTag(req.params.id, req.body);
    res.status(200).json(patchedTag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTag = async (req, res) => {
  try {
    await tagService.deleteTag(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
