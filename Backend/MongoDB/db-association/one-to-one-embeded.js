import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()

//! Connect DB
mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log("Connection Failed");
    })


const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    established: {
        type: String,
        required: true
    },
    location: {
        type: String
    }
})

const mobileSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 10000
    },
    brand: companySchema
},
    {
        timestamps: true
    })

const Mobile = mongoose.model("Mobile", mobileSchema)

Mobile.create({
    model: "Google Pixel 10",
    price: 45000,
    brand: {
        name: "Google",
        established: "2002",
        location: "US"
    }
}).then((res) => {
    console.log("Mobile Created");
}).catch((err) => {
    console.log(err.message);
})


app.listen(() => {
    console.log("Server Running");

})