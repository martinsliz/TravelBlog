import { useNavigate } from "react-router-dom"



const Review = ({ review }) => {
  let navigate = useNavigate()

const updateReview = () => {
  navigate(`/reviews/update/${review._id}`)

}  
  return (
    <div>
    <div>
      <ul>
      <h3>What Visitors are Saying</h3>
        <li>Rating: {review.rating}</li>
        <li>Budget friendly? {review.affordable}</li>
        <li>Best Time to Go: {review.bestTimeToGo}</li>
        <li>What to See: {review.attractions}</li>
        <li>Where to Stay: {review.whereToStay}</li>
        <li>Where to Eat: {review.restaurants}</li>
        <li>Comments: {review.comments}</li>
      </ul>
      </div>
      <button onClick={updateReview}>Edit</button>
      </div>
  )
}

export default Review