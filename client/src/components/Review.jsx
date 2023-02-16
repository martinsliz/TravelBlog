import { useNavigate } from "react-router-dom"
import UpdateReview from "./UpdateReview"



const Review = ({ review, getAllReviews }) => {
  // let navigate = useNavigate()

  
  return (
    <div>
    <div>
      <ul>
        <li>Rating: {review.rating}</li>
        <li>Budget friendly? {review.affordable}</li>
        <li>Best Time to Go: {review.bestTimeToGo}</li>
        <li>What to See: {review.attractions}</li>
        <li>Where to Stay: {review.whereToStay}</li>
        <li>Where to Eat: {review.restaurants}</li>
        <li>Comments: {review.comments}</li>
      </ul>
      </div>
      {/* <button onClick={updateReview}>Edit</button> */}
      <UpdateReview review={review} getAllReviews={getAllReviews} />
      {/* <DeleteReview review={review} getAllReviews={getAllReviews} /> */}
      </div>
  )
}

export default Review