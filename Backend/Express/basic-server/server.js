const express = require('express')
const app = express()

const PORT = 3500

app.get("/", (req, res) => {
    res.send("This is an example of response")
    console.log(req.method)
    console.log(req.url);
})

// app.get("/books", (req, res) => {
//     res.send("normal Book route")
// })

// app.get("/books/:id", (req, res) => {
//     res.send(`Parameterized route with id- ${req.params.id}`)
// })

// app.post("/books", (req, res) => {
//     res.send("Data Created")
// })

app.route('/books')
    .get((req, res) => {
        res.send("Data Fetched")
    })
    .post((req, res) => { res.send("Data Created") })
    .put((req, res) => { res.send("Data Updated") })
    .delete((req, res) => { res.send("Data Deleted") })

app.get('/search', (req, res) => {
    res.send(`Search for: ${req.query.price} ${req.query.color} ${req.query.brand}`)
    console.log(req.query);
})


app.listen(PORT, () => {
    console.log("Server is running");
})
