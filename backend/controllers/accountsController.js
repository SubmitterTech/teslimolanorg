const accountsModel = require("../models/accountsModel");
const postModel = require("../models/postModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = new accountsModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await accountsModel.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await accountsModel.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Böyle bir kayıt yok hacı abi.' });
      }
      res.status(200).json({ message: "Kullanıcı silindi." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getUserByEmail = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await accountsModel.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: 'Böyle bir kullanıcı bulunamadı.' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
