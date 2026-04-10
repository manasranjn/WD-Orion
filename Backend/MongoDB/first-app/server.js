const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//! Express app
const app = express();


//? Schema
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String,
//     rating: Number
// })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    price: {
        type: Number,
        min: 100,
        max: 100000
    },
    description: {
        type: String,
        minlength: 50
    },
    rating: {
        type: Number,
        required: true,
        max: 5
    }
})


const Product = mongoose.model("Product", productSchema);

Product.create({
    name: "Samsung S26 Ultra ",
    price: 50000,
    description: "The latest Samsung flagship phone with a stunning display and powerful performance.",
    rating: 4.5
}).then((res) => {
    console.log("Product created");
}).catch((err) => {
    console.log("Failed to create");
})




//? Create a new product
const product1 = new Product({
    name: "iPhone 14 Pro Max",
    price: 1099,
    description: "The latest iPhone with advanced features and improved performance.",
    rating: 4.8
})
// product1.save()

// Product.create({
//     name: 10,
//     price: 1199,
//     description: "The latest Samsung flagship phone with a stunning display and powerful performance.",
//     rating: 4.7
// })


//? Get all products
// Product.find()
//     .then((res) => {
//         console.log("All the products", res);
//     }).catch((err) => {
//         console.log(err);
//     })

//? Get single product
// Product.findOne({ price: 1099 })
//     .then((res) => {
//         console.log("Pruct with price- 1099", res);
//     }).catch((err) => {
//         console.log(err);
//     })

// Product.findById("69d7798be7bbef9f45527bbe")
//     .then((res) => {
//         console.log("Pruct with unique id- ", res);
//     }).catch((err) => {
//         console.log(err);
//     })

//? Update Product
// Product.updateOne({ name: "Samsung Galaxy S23 Ultra" }, { price: 25000 })
//     .then((res) => {
//         console.log("Product Updated");
//     }).catch((err) => {
//         console.log(err);
//     })

// Product.updateMany({ name: "Samsung Galaxy S23 Ultra" }, { price: 25000 })
//     .then((res) => {
//         console.log("All Product Updated");
//     }).catch((err) => {
//         console.log(err);
//     })


//? Delete a Product
// Product.findByIdAndDelete("69d779446f01c047cbd418d5")
//     .then((res) => {
//         console.log("Product Deleted");
//     }).catch((err) => {
//         console.log(err);
//     })
// Product.deleteOne({ name: "Samsung Galaxy S23 Ultra" })
//     .then((res) => {
//         console.log("Product Deleted");
//     }).catch((err) => {
//         console.log(err);
//     })


mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("DB Connected");

    }).catch((err) => {
        console.log(err);
    })

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})