import UpdateReview from './UpdateReview'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Review = ({ review, getAllReviews }) => {
  const [updating, setUpdating] = useState(false)

  return (
    <div className="reviewDisplay">
      <div>
        <h3>
          <u>REVIEWS</u>
        </h3>
        <h3>Rating: {review.rating}</h3>
        <h3>Budget friendly? {review.affordable}</h3>
        <h3>Best Time to Go: {review.bestTimeToGo}</h3>
        <h3>What to See: {review.attractions}</h3>
        <h3>Where to Stay: {review.whereToStay}</h3>
        <h3>Where to Eat: {review.restaurants}</h3>
        <h3>Comments: {review.comments}</h3>
      </div>
      <div className="viewAll">
        <NavLink to="/addReview">Add your own review here!</NavLink>
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
