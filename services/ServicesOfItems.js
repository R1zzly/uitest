const ItemModel = require("../models/Item");

exports.getAllItems = async () => {
  return await ItemModel.find();
};

exports.createItem = async (item) => {
  return await ItemModel.create(item);
};
exports.getItemById = async (id) => {
  return await ItemModel.findById(id);
};

exports.updateItem = async (id, item) => {
  return await ItemModel.findByIdAndUpdate(id, item);
};

exports.deleteItem = async (id) => {
  return await ItemModel.findByIdAndDelete(id);
};
