require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/adminRoute');
const configRoute = require('./routes/configRoute');
const userRoute = require('./routes/userRoute');
const emailRoute = require('./routes/emailRoute');
const postsRoute = require('./routes/postsRoute');
const connectDB = require('./config/db');

const app = express();
const port = 5001; //Server Port

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api/admin', adminRoute);
app.use('/api', configRoute);
app.use('/api/admin', userRoute);
app.use('/api', postsRoute);
app.use('/api', emailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});