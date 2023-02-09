const { Schema } = require('mongoose')

const destinationSchema = new Schema(
  {
    name: { type: String, required: true },
    avgRating: { type: Int, required: true }
    languages: { type: String, required: true }
    currency: { type: String, required: true }
    travelWarning: { type: String, required: true }
    imageOne: { type: String, required: true }
    imageTwo: { type: String, required: true }
    imageThree: { type: String, required: true }
    reviews: { type: Int, required: true }
  },
  { timestamps: true }
)

module.exports = destinationSchema