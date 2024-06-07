require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/adminRoute');
const configRouter = require('./routes/configRoute')
const connectDB = require('./config/db');

const app = express();
const port = 5001; //Server Port

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api',adminRoute);
app.use('/api',configRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});