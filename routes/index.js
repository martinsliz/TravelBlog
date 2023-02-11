const { Router } = require('express')
const destinationRouter = require('./destinationRouter')
const reviewRouter = require('./reviewRouter')
const router = Router()

router.get('/', (req, res) => res.send('I am root!'))

router.use('/destinationRouter', destinationRouter)
router.use('/reviewRouter', reviewRouter)

module.exports = router
