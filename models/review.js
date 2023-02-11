const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    rating: { type: Number, required: true },
    affordable: { type: String },
    bestTimeToGo: { type: String, required: true },
    whereToStay: { type: String, required: true },
    attractions: { type: String, required: true },
    restaurants: { type: String, required: true },
    image: { type: String },
    comments: { type: String },
    destination: { type: Schema.Types.ObjectId, ref: 'Destination' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
