import express from "express"
import mongoose, { mongo } from "mongoose"
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

const sellerSchema = new mongoose.Schema({
    name: String, email: String, products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
}, { timestamps: true })

const Seller = mongoose.model("Seller", sellerSchema)

const productSchema = new mongoose.Schema({
    name: String, description: String, price: Number
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema)

// Product.create({
//     name: "Tablet", description: "New mobile", price: 25000
// }).then((res) => {
//     console.log("Product created");
// }).catch((err) => {
//     console.log("Failed to create product");
// })

// Seller.create({
//     name: "Samsung", email: "samsung.gmail.com",
//     products: ["69dc99c79a2f53b7a0607932", "69dc99d3d6d307c3d0608dbf", "69dc99d86a6a7396a286ea54"]
// }).then((res) => {
//     console.log("Product created");
// }).catch((err) => {
//     console.log("Failed to create product");
// })


Seller.find().populate("products")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))


app.listen(() => {
    console.log("Server Running");

})