const mongoose = require('mongoose');

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
  }
},{timestamps:true});

//E-posta için benzersiz index sağlanması
accountsSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('AccountsModel', accountsSchema);