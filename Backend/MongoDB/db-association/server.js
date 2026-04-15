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

//? Course Schema
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
}, { timestamps: true })

const Course = mongoose.model("Course", courseSchema)

//? Student Schema
const studentSchema = new mongoose.Schema({
    name: String, age: Number
    ,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
})

const Student = mongoose.model("Student", studentSchema)


//! Create Course
// Course.create({
//     name: "Frontend Complete Guide",
//     description: "Complete guide to frontend development"
// }).then((res) => console.log("Course Created")
// ).catch((err) => console.log(err.message)
// )


//! Create Student
// Student.create({
//     name: "Smith",
//     age: 25,
//     courses: ["69df2148add5c875bde1c99b"] //! Course ID
// }).then((res) => console.log("Course Created")
// ).catch((err) => console.log(err.message)
// )


// Course.find()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
//     })



// Student.find().populate("courses")
//     .then((res) => {
//         console.log(res);
//         console.log(res[0].courses);
//     }).catch((err) => {
//         console.log(err.message);
//     })


// Student.findById("69df224137156217a4305d29").populate("courses")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
//     })


//? Update Course
Course.updateMany({
    _id: { $in: ['69df20ef9a787c79df4a9f10', '69df2148add5c875bde1c99b'] }
},
    { $push: { students: "69df21d7318a3d39a8985914" } }) //! Student ID
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.message);
    })


// Course.findById("69df20ef9a787c79df4a9f10").populate("students")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
//     })

app.listen(() => {
    console.log("Server Running");

})