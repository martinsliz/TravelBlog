const { Router } = require('express')
const { Review } = require('../controllers')
const router = Router()

router.post('/review', Review.createReview)
router.get('/reviews', Review.getAllReviews)
router.get('/review/:id', Review.getReviewById)
router.put('/review/:id', Review.updateReview)
router.delete('/review/:id', Review.deleteReview)

module.exports = router
