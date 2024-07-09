require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');

// Rotalar
const adminRoute = require('./routes/adminRoute');
const configRoute = require('./routes/configRoute');
const userRoute = require('./routes/userRoute');
const emailRoute = require('./routes/emailRoute');
const postsRoute = require('./routes/postsRoute');
const hutbeRoute = require('./routes/hutbeRoute');

const app = express();
const port = process.env.PORT || 5001;  // Tavsiye edilen: PORT'u .env dosyasından alın

// CORS yapılandırması
const allowedOrigins = [
  'http://localhost:3000', // Yerel geliştirme ortamı
  'https://teslimolanorg-frontend.onrender.com', // Üretim ortamı domaini
  'https://teslimolanorg-backend.onrender.com',
  'http://157.230.18.195',
  'http://157.230.18.195:3000', // Droplet üzerindeki frontend
  'http://157.230.18.195:5001' // Droplet üzerindeki backend
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statik dosyaların servis edilmesi
app.use('/uploads', express.static(path.join(__dirname, 'assets/uploads')));

// Veritabanına bağlan
connectDB();

// API Rotaları
app.use('/api/admin', adminRoute);
app.use('/api', configRoute);
app.use('/api/admin', userRoute);
app.use('/api', postsRoute);
app.use('/api', emailRoute);
app.use("/api/hutbeler", hutbeRoute);

// Sunucuyu tüm ağ arayüzlerinde dinlemek
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});