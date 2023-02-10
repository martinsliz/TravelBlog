const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    rating: { type: String, required: true },
    affordable: { type: String },
    bestTimeToGo: { type: String, required: true },
    whereToStay: { type: String, required: true },
    attractions: { type: String, required: true },
    restaurant: { type: String, required: true },
    image: { type: String, required: true },
    comments: { type: String }
  },
  { timestamps: true }
)

module.exports = reviewSchema
