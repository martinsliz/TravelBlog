const Review = ({ review }) => {

  return (
    <div>
      <h3>What Visitors are Saying</h3>
      <ul>
        <li>Rating: {review.rating}</li>
        <li>Budget friendly? {review.affordable}</li>
        <li>Best Time to Go: {review.bestTimeToGo}</li>
        <li>What to See: {review.attractions}</li>
        <li>Where to Stay: {review.whereToStay}</li>
        <li>Where to Eat: {review.restaurants}</li>
        <li>Comments: {review.comments}</li>
        <button>Visited this destination? Add your review!</button>
      </ul>
      </div>
  )
}

export default Review