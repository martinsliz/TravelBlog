import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import Review from './Review'

const DestinationDetails = ({ details, destinations, setDetails }) => {
  const [destinationReviews, setDestinationReviews] = useState([])

  let { id } = useParams()

  const getAllReviews = async () => {
    const response = await axios.get(`${BASE_URL}/reviewRouter/reviews`)

    let filterReviews = response.data.reviews.filter(
      (review) => review.destination === id
    )
    setDestinationReviews(filterReviews)
  }
  useEffect(() => {
    const getDetails = destinations.find(
      (destination) => destination._id === id
    )
    setDetails(getDetails)
    getAllReviews()
  }, [details])

  return details ? (
    <div className="destination-content">
      <section className="imageContainer">
        <img className="detailImage" src={details.imageOne} alt="" />
        <div className="info">
          <h2 className="feature">Destination: {details.name}</h2>
          <h3>Location: {details.location}</h3>
          <h3>Languages: {details.languages}</h3>
          <h3>Currency: {details.currency}</h3>
          <h3>Travel Warning: {details.travelWarning}</h3>
        </div>
      </section>
      <div>
        {destinationReviews.map((review) => (
          <Review review={review} getAllReviews={getAllReviews} />
        ))}
      </div>
    </div>
  ) : null
}

export default DestinationDetails
