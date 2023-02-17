import UpdateReview from './UpdateReview'
import { useState } from 'react'

const Review = ({ review, getAllReviews }) => {
  const [updating, setUpdating] = useState(false)

  return (
    <div>
      <div className="review">
        <div>
          <tr>
            <td>
              <h2>Rating: {review.rating}</h2>
            </td>
          </tr>
          <tr>
            <td>Budget friendly? {review.affordable}</td>
          </tr>
          <h6></h6>
          <h6>Best Time to Go: {review.bestTimeToGo}</h6>
          <h6>What to See: {review.attractions}</h6>
          <h6>Where to Stay: {review.whereToStay}</h6>
          <h6>Where to Eat: {review.restaurants}</h6>
          Comments: {review.comments}
        </div>
      </div>
      {updating ? (
        <div>
          <UpdateReview
            review={review}
            getAllReviews={getAllReviews}
            setUpdating={setUpdating}
          />
        </div>
      ) : (
        <button onClick={() => setUpdating(true)}>Edit</button>
      )}
    </div>
  )
}

export default Review
