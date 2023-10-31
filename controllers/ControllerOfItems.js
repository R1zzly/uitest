const itemService = require("../services/ServicesOfItems");

exports.getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json({ data: items, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    res.json({ data: item, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    res.json({ data: item, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);
    res.json({ data: item, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await itemService.deleteItem(req.params.id);
    res.json({ data: item, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
