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
const connectDB = require('./config/db');

const app = express();
const port = 5001; //Server Port

// CORS yapılandırması
const allowedOrigins = [
  'http://localhost:3000', // Yerel geliştirme ortamı
  'https://teslimolanorg-frontend.onrender.com/', // Üretim ortamı domaini
  'https://teslimolanorg-backend.onrender.com'
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