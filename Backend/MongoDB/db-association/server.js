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

const brandSchema = new mongoose.Schema({
    name: String,
    established: Number,
    location: String
}, {
    timestamps: true
})

const Brand = mongoose.model("Brand", brandSchema)

const laptopSchema = new mongoose.Schema({
    model: String,
    price: String,
    ram: {
        type: String,
        enum: ['8GB', '16GB', '32GB']
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    }
}, {
    timestamps: true
})

const Laptop = mongoose.model("Laptop", laptopSchema)

// Brand.create({
//     name: "Dell",
//     established: 2002,
//     location: "Japan"
// }).then((res)=>{
//     console.log("Brand Created");
// }).catch((err)=>{
//     console.log(err.message);
// })

// Laptop.create({
//     model: "Aspire",
//     price: 42000,
//     ram: "16GB",
//     brand: "69da1ed1c7125d7ef59783ee"
// }).then((res) => {
//     console.log("Laptop Created");
// }).catch((err) => {
//     console.log(err.message);
// })


// Laptop.find().populate('brand')
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
// //     })

// Laptop.find().populate({ path: 'brand', select: "name" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
//     })

Laptop.find().populate({ path: 'brand', select: "-name" })
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.message);

    })


app.listen(() => {
    console.log("Server Running");

})