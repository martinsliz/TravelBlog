const Review = require('../models/review')
const Destination = require('../models/destination')

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.mesage })
  }
}

const createDestination = async (req, res) => {
  try {
    const destination = await new Destination(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createReview,
  createDestination
}
