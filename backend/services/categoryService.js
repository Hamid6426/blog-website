const Category = require("../models/Category");

exports.getAllCategories = async () => {
  return await Category.find();
};

exports.getCategoryById = async (id) => {
  return await Category.findById(id);
};

exports.createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

exports.updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

exports.deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

exports.patchCategory = async (id, postData) => {
  return await Post.findByIdAndUpdate(id, { $set: postData }, { new: true });
};