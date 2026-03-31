const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("Categories")
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Category with id ${id}`)
})

router.post('/', (req, res) => {
    res.send("Category created")
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Category with id ${id} updated`)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Category with id ${id} deleted`)
})

module.exports = router