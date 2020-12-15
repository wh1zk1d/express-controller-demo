const router = require('express').Router()
// Middlewares
const errorMiddleware = require('../middlewares/errors.middleware')

const user = require('./user')

// Routes
router.get('/', (req, res) => {
  res.send('hello world')
})

router.use('/user', user)

// Error handling
router.use(errorMiddleware)

module.exports = router
