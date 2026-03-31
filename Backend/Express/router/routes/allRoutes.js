const express = require("express")
const router = express.Router()

const userRouter = require('./usersRouter')
const loginRouter = require('./loginRoutes')
const productsRouter = require('./productsRoutes')
const categoriesRouter = require('./categories')

router.use('/users', userRouter)
router.use('/login', loginRouter)
router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)

module.exports = router