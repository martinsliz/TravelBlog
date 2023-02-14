const { Schema } = require('mongoose')

const destinationSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    languages: { type: String, required: true },
    currency: { type: String, required: true },
    travelWarning: { type: String, required: true },
    imageOne: { type: String },
    imageTwo: { type: String },
    imageThree: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = destinationSchema
