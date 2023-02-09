const mongoose = require('mongoose')
const destinationSchema = require('./destination')
const reviewSchema = require('./review')

const Destination = mongoose.model('Destination', destinationSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Destination,
  Review
}
