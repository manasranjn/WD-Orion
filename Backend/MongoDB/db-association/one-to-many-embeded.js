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

const productSchema = new mongoose.Schema({
    pName: String, description: String, price: Number
})

const companySchema = new mongoose.Schema({
    name: String, email: String, products: [productSchema]
}, { timestamps: true })

const Company = mongoose.model("Company", companySchema)

// Company.create({
//     name: "Apple",
//     email: "apple@gmail.com",
//     products: [
//         { pName: "Mobile", description: "This is mobile ", price: 10000 },
//         { pName: "Laptop", description: "This is laptop ", price: 10000 },
//         { pName: "Tablet", description: "This is Camera ", price: 10000 },
//         { pName: "Smart Watch", description: "This is AC ", price: 10000 }
//     ]
// }).then((res) => {
//     console.log("Product created");
// }).catch((err) => {
//     console.log("Failed to create product");
// })

Company.find()
    .then((res) => console.log(res)
    ).catch((err) => console.log(err.message)
    )


app.listen(() => {
    console.log("Server Running");

})