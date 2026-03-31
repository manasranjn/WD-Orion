const express = require('express')
const app = express()
const allRoutes = require('./routes/allRoutes.js')

app.use(express.json())
app.use('/api', allRoutes)


app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(3000, () => {
    console.log("Server is running");
})