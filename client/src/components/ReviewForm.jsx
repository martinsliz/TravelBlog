import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReviewForm = ({ details }) => {
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
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/api/reviewRouter/review', formState)
    setFormState(initialState)
    navigate(`/destination/${details._id}`)
  }

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating</label>
      <input
        type="text"
        id="rating"
        onChange={handleChange}
        value={formState.rating}
      />
      <label htmlFor="affordable">Budget-friendly?</label>
      <input
        type="text"
        id="affordable"
        onChange={handleChange}
        value={formState.affordable}
      />
      <label htmlFor="bestTimeToGo">Best Time to Go:</label>
      <input
        type="text"
        id="bestTimeToGo"
        onChange={handleChange}
        value={formState.bestTimeToGo}
      />
      <label htmlFor="attractions">What to See:</label>
      <input
        type="text"
        id="attractions"
        onChange={handleChange}
        value={formState.attractions}
      />
      <label htmlFor="whereToStay">Where to Stay:</label>
      <input
        type="text"
        id="whereToStay"
        onChange={handleChange}
        value={formState.whereToStay}
      />
      <label htmlFor="restaurants">Where to Eat:</label>
      <input
        type="text"
        id="restaurants"
        onChange={handleChange}
        value={formState.restaurants}
      />
      <label htmlFor="comments">Tell us more!</label>
      <input
        type="text-area"
        cols="20"
        rows="10"
        id="comments"
        onChange={handleChange}
        value={formState.comments}
      />
      <label htmlFor="">Upload a Photo:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formState.image}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ReviewForm
