// backend/controllers/uploadController.js
const uploadFile = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ filePath: `/uploads/${req.file.filename}` });
  };
  
  module.exports = {
    uploadFile
  };
  