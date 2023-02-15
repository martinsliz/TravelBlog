import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const ReviewForm = ( {details} ) => {
  let navigate = useNavigate()
  const initialState = {
    rating: '',
    affordable: '',
    bestTimeToGo: '',
    whereToStay: '',
    attractions: '',
    restaurants: '',
    image: '',
    comments: '',
    destination: details._id 
  }


  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/reviewRouter/review`, formState)
    setFormState(initialState)
    navigate(`/destination/${details._id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='rating'>Rating</label>
      <input type='text' id="rating" onChange={handleChange} value={formState.rating} />
      <label htmlFor='affordable'>Budget-friendly?</label>
      <input type="text" id="affordable" onChange={handleChange} value={formState.affordable} />
      <label htmlFor="bestTimeToGo">Best Time to Go:</label>
      <input type="text" id="bestTimeToGo" onChange={handleChange} value={formState.bestTimeToGo} />
      <label htmlFor="attractions">What to See:</label>
      <input type="text" id="attractions" onChange={handleChange} value={formState.attractions} />
      <label htmlFor="whereToStay">Where to Stay:</label>
      <input type="text" id="whereToStay" onChange={handleChange} value={formState.whereToStay} />
      <label htmlFor="restaurants">Where to Eat:</label>
      <input type="text" id="restaurants" onChange={handleChange} value={formState.restaurants} />
      <label htmlFor="comments">Comments:</label>
      <input type="text-area" id="comments" onChange={handleChange} value={formState.comments} />
      <label htmlFor=""></label>
      <input type="text" id="image" onChange={handleChange} value={formState.image} />
      <button type="submit">Submit</button>
      </form>
  )
}

export default ReviewForm