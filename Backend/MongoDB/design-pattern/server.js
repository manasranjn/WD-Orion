const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()


const router = require('./routes/allRoutes')

app.use(express.json());
app.use('/api', router);

mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.log(err)
    })




app.listen(process.env.PORT, () => {
    console.log("Server is running");
})