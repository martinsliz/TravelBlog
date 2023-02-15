import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import Review from './Review'

const DestinationDetails = (props) => {
  const [details, setDetails] = useState('')
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
    const getDetails = props.destinations.find(destination => destination._id === id)
    // console.log(props.destinations)
    setDetails(getDetails)
    getAllReviews()

  }, [])
  
  console.log(destinationReviews)
  
  return details ? (
    <div className='details'>
      
      <div>
        <img src={details.imageOne} alt='' />
        <h2>Name: {details.name}, Location: {details.location}</h2>
      </div>
     <div>
      {destinationReviews.map((review) => (
        <Review review={review} />
      ))}
     </div>
    </div>
  ) : null
}



export default DestinationDetails