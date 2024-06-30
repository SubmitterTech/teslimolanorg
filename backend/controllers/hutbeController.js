const HutbeModel = require("../models/hutbeModel");
const slugify = require("slugify");

exports.addHutbe = async (req, res) => {
  const { text, title, tags } = req.body;

  try {
    const newHutbe = new HutbeModel({
      text,
      title,
      tags,
    });
    await newHutbe.save();
    res.status(201).json(newHutbe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHutbeler = async (req, res) => {
  try {
    const hutbeler = await HutbeModel.find();
    res.status(200).json(hutbeler);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHutbeBySlug = async (req, res) => {
  try {
    const hutbe = await HutbeModel.findOne({ slug: req.params.slug });
    if (!hutbe) {
      return res.status(404).json({ message: "Hutbe not found" });
    }
    res.status(200).json(hutbe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHutbe = async (req, res) => {
  const { text, title, tags } = req.body;

  try {
    const updatedHutbe = await HutbeModel.findOneAndUpdate(
      { slug: req.params.slug },
      { text, title, tags, slug: slugify(title, { lower: true, strict: true, locale: 'tr' }) },
      { new: true, runValidators: true }
    );
    if (!updatedHutbe) {
      return res.status(404).json({ message: "Hutbe not found" });
    }
    res.status(200).json(updatedHutbe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHutbeBySlug = async (req, res) => {
  try {
    const deletedHutbe = await HutbeModel.findOneAndDelete({ slug: req.params.slug });
    if (!deletedHutbe) {
      return res.status(404).json({ message: "Hutbe not found" });
    }
    res.status(200).json({ message: "Hutbe deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHutbeById = async (req, res) => {
  try {
    const deletedHutbe = await HutbeModel.findByIdAndDelete(req.params.id);
    if (!deletedHutbe) {
      return res.status(404).json({ message: "Hutbe not found" });
    }
    res.status(200).json({ message: "Hutbe deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};