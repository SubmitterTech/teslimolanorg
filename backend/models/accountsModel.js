const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const accountsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: [true, 'Role is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// E-posta için benzersiz index sağlanması
accountsSchema.index({ email: 1 }, { unique: true });

// Parolayı kaydetmeden önce hashle
accountsSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('AccountsModel', accountsSchema);