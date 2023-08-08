const { Router } = require('express')
const router = Router()
const destinationRouter = require('./destinationRouter')
const reviewRouter = require('./reviewRouter')

router.use('/destinationRouter', destinationRouter)
router.use('/reviewRouter', reviewRouter)

module.exports = router
