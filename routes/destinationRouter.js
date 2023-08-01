const { Router } = require('express')
const { Destination } = require('../controllers')
const router = Router()

router.get('/destinations', Destination.getAllDestinations)
router.post('/destination', Destination.createDestination)
router.get('/destination/:id', Destination.getDestinationById)
router.put('/destination/:id', Destination.updateDestination)
router.delete('/destination/:id', Destination.deleteDestination)

module.exports = router
