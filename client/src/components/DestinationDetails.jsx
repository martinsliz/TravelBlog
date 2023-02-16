import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import Review from './Review'


const DestinationDetails = ({details, destinations, setDetails}) => {
  const [destinationReviews, setDestinationReviews] = useState([]) 
  
  let { id } = useParams()

  const getAllReviews = async () => {
    const response = await axios.get(
      `${BASE_URL}/reviewRouter/reviews`
    )
    
    let filterReviews = response.data.reviews.filter(review => review.destination === id)
    setDestinationReviews(filterReviews)
  }
  useEffect(() => {
    const getDetails = destinations.find(destination => destination._id === id)
    setDetails(getDetails)
    getAllReviews()

  }, [details])
  

  
  return details ? (
    <div className='destination-content'>
      <div>
      <h2>Name: {details.name}</h2><h3>Location: {details.location}</h3>
      </div>
      <section className='imageContainer'>
      <img className='detailImage' src={details.imageOne} alt='' />
      </section>
      <div className='travel'>
      Languages: {details.languages}
      Currency: {details.currency}
      Travel Warning: {details.travelWarning}
      </div>
     <div>
      {destinationReviews.map((review) => (
        <Review review={review} getAllReviews={getAllReviews}/>
      ))}
      <NavLink to='/addReview' ><h3>Visited this destination? Add your review!</h3></NavLink>
     </div>
    </div>
  ) : null
}



export default DestinationDetails