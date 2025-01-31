const Report = require("../models/Report");

exports.getAllReports = async () => {
  return await Report.find();
};

exports.getReportById = async (id) => {
  return await Report.findById(id);
};

exports.createReport = async (reportData) => {
  return await Report.create(reportData);
};

exports.updateReport = async (id, reportData) => {
  return await Report.findByIdAndUpdate(id, reportData, { new: true });
};

exports.deleteReport = async (id) => {
  return await Report.findByIdAndDelete(id);
};

exports.patchReport = async (id, reportData) => {
  return await Report.findByIdAndUpdate(id, { $set: reportData }, { new: true });
};
