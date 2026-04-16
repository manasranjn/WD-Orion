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

const subjectSchema = new mongoose.Schema({
    title: String
}, { timestamps: true })

const Subject = mongoose.model("Subject", subjectSchema)

const learnerSchema = new mongoose.Schema({
    name: String, age: Number
}, { timestamps: true })

const Learner = mongoose.model("Learner", learnerSchema)

const enrollmentSchema = new mongoose.Schema({
    learner: { type: mongoose.Schema.Types.ObjectId, ref: "Learner" },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    status: { type: String, enum: ["enrolled", "completed", "dropped"], default: "enrolled" },
    enrolledAt: { type: Date, default: Date.now() }
}, { timestamps: true })

const Enrollment = mongoose.model("Enrollment", enrollmentSchema)


//! create Students
// Learner.create({ name: "Jane Smith", age: 35 })
//     .then((student) => {
//         console.log("Student created:", student);
//     })
//     .catch((err) => {
//         console.error("Error creating student:", err);
//     });

//?! create Subjects
// Subject.create({ title: "Chemistry  " })
//     .then((subject) => {
//         console.log("Subject created:", subject);
//     })
//     .catch((err) => {
//         console.error("Error creating subject:", err);
//     });

//! create Enrollment
// Enrollment.create({
//     learner: "69e06cbfaf669c64d8970ed7",
//     subject: "69e06dac43e7a25cfe180898"
// }).then((enrollment) => {
//     console.log("Enrollment created:", enrollment);
// }).catch((err) => {
//     console.error("Error creating enrollment:", err);
// });


//? Fetch Enrollments with Learner and Subject details
Enrollment.find().populate("learner", "name").populate("subject", "title") // Populate learner details (name and age) and subject details (title)
    .then((enrollments) => {
        console.log(enrollments);
    }).catch((err) => {
        console.log(err);

    })


app.listen(process.env.PORT, () => {
    console.log("Server Running");

})