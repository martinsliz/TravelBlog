const { Router } = require('express')
const router = Router()
const destinationRouter = require('./destinationRouter')
const reviewRouter = require('./reviewRouter')

router.get('/', (req, res) => res.send('I am root!'))

router.use('/destinationRouter', destinationRouter)
router.use('/reviewRouter', reviewRouter)

module.exports = router
