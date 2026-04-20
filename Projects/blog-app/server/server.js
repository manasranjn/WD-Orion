const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db');
const allRoutes = require('./routes/allRoutes');

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', allRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})