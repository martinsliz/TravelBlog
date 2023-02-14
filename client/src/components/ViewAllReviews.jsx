import { UseState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ViewAllReviews = (props) => {
  const [reviews, setReviews] = useState(null)

  const getReviews = async () => {
    const response = await axios.get (
      `${BASE_URL}/reviewRouter/reviews`
    )
    setReviews(response.data.reviews)
    console.log(response.data.reviews)
  }
  return (
    <div>Reviews</div>
  )
}
getReviews()

export default ViewAllReviews