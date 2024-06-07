const mongoose = require("mongoose");

const configSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    youtube: {
      type: String,
      match: [/^https?:\/\/(www\.)?youtube\.com\/.+$/, "is invalid"],
    },
    tiktok: {
      type: String,
      match: [/^https?:\/\/(www\.)?tiktok\.com\/.+$/, "is invalid"],
    },
    instagram: {
      type: String,
      match: [/^https?:\/\/(www\.)?instagram\.com\/.+$/, "is invalid"],
    },
    facebook: {
      type: String,
      match: [/^https?:\/\/(www\.)?facebook\.com\/.+$/, "is invalid"],
    },
    x: {
      type: String,
      match: [/^https?:\/\/(www\.)?twitter\.com\/.+$/, "is invalid"],
    },
    discord: {
      type: String,
      match: [/^https?:\/\/(www\.)?discord\.com\/.+$/, "is invalid"],
    },
  },
  { timestamps: true }
);

const Config = mongoose.model("Config", configSchema);

module.exports = Config;
