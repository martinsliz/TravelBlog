const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    rating: { type: Number },
    affordable: { type: String },
    bestTimeToGo: { type: String },
    whereToStay: { type: String },
    attractions: { type: String },
    restaurants: { type: String },
    imageUrl: { type: String },
    comments: { type: String },
    destination: { type: Schema.Types.ObjectId, ref: 'Destination' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
