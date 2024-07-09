require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/adminRoute');
const configRoute = require('./routes/configRoute');
const userRoute = require('./routes/userRoute');
const emailRoute = require('./routes/emailRoute');
const postsRoute = require('./routes/postsRoute');
const hutbeRoute = require('./routes/hutbeRoute');
const path = require('path'); // path modülünü import edin
const connectDB = require('./config/db');

const app = express();
const port = 5001; //Server Port

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
    // origin'in allowedOrigins listesinde olup olmadığını kontrol edin
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Public klasöründeki statik dosyalara erişim sağlar
/* app.use('/uploads', express.static('public/uploads')); */
// Statik dosyaların servis edilmesi
app.use('/uploads', express.static(path.join(__dirname, 'assets/uploads')));

connectDB();

app.use('/api/admin', adminRoute);
app.use('/api', configRoute);
app.use('/api/admin', userRoute);
app.use('/api', postsRoute);
app.use('/api', emailRoute);
app.use("/api/hutbeler", hutbeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
