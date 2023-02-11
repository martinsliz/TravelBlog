const { Router } = require('express')
const { Destination } = require('../controllers')
const router = Router()

router.post('/destination', Destination.createDestination)
router.get('/destinations', Destination.getAllDestinations)
router.get('/destination/:id', Destination.getDestinationById)
router.put('/destination/:id', Destination.updateDestination)
router.delete('/destination/:id', Destination.deleteDestination)

module.exports = router
