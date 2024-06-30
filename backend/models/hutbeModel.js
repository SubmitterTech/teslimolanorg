const mongoose = require("mongoose");
const slugify = require("slugify");

const hutbeSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text alanı gereklidir"],
    },
    title: {
      type: String,
      required: [true, "Title alanı gereklidir"],
    },
    tags: {
      type: [String],
      default: [], // Varsayılan olarak boş bir dizi
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Slug oluşturma işlemi
hutbeSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
      locale: 'tr', // Türkçe karakterleri doğru dönüştürmek için
    });
  }
  next();
});

module.exports = mongoose.model("HutbeModel", hutbeSchema);