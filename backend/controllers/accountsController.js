const AccountsModel = require("../models/accountsModel");
const bcrypt = require('bcrypt');

// Kullanıcı oluşturma endpoint'i
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Parolayı hashle
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new AccountsModel({
      name,
      email,
      password: hashedPassword,
      role
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Tüm kullanıcıları getirme endpoint'i
exports.getAllUsers = async (req, res) => {
  try {
    const users = await AccountsModel.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm kullanıcıları silme endpoint'i
exports.deleteAllUsers = async (req, res) => {
  try {
    const result = await AccountsModel.deleteMany({});
    res.status(200).json({ message: 'All users deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı silme endpoint'i
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await AccountsModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Böyle bir kayıt yok hacı abi.' });
    }
    res.status(200).json({ message: "Kullanıcı silindi." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// E-posta ile kullanıcı getirme endpoint'i
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await AccountsModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Böyle bir kullanıcı bulunamadı.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// E-posta güncelleme endpoint'i
exports.updateEmail = async (req, res) => {
  const { currentEmail, newEmail } = req.body;

  try {
    const user = await AccountsModel.findOne({ email: currentEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.email = newEmail;
    await user.save();
    res.status(200).json({ message: 'Email updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Parola güncelleme endpoint'i
exports.updatePassword = async (req, res) => {
  const { currentEmail, currentPassword, newPassword } = req.body;

  try {
    const user = await AccountsModel.findOne({ email: currentEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mevcut parolanın doğru olup olmadığını kontrol et
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password does not match' });
    }

    // Yeni parolayı hashle ve kaydet
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı giriş yapma endpoint'i
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AccountsModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Parolanın doğru olup olmadığını kontrol et
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Giriş yapıldı' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};