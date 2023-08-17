import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReviewForm = ({ details }) => {
  console.log(details)
  let navigate = useNavigate()
  const initialState = {
    rating: '',
    affordable: '',
    bestTimeToGo: '',
    whereToStay: '',
    attractions: '',
    restaurants: '',
    imageUrl: '',
    comments: '',
    destination: details._id
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${BASE_URL}/reviewRouter/review`, formState)
      setFormState(initialState)
      navigate(`/destination/${details._id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating</label>
      <input
        type="text"
        id="rating"
        placeholder="0: Skip it - 5: Pack your bags!"
        onChange={handleChange}
        value={formState.rating}
      />
      <label htmlFor="affordable">Budget-friendly?</label>
      <input
        type="text"
        id="affordable"
        placeholder="Easy on the wallet?"
        onChange={handleChange}
        value={formState.affordable}
      />
      <label htmlFor="bestTimeToGo">Best Time to Go:</label>
      <input
        type="text"
        id="bestTimeToGo"
        placeholder="Give us the inside scoop!"
        onChange={handleChange}
        value={formState.bestTimeToGo}
      />
      <label htmlFor="attractions">What to See:</label>
      <input
        type="text"
        id="attractions"
        placeholder="Touristy? Off the path?"
        onChange={handleChange}
        value={formState.attractions}
      />
      <label htmlFor="whereToStay">Where to Stay:</label>
      <input
        type="text"
        id="whereToStay"
        placeholder="Coziest spots go here!"
        onChange={handleChange}
        value={formState.whereToStay}
      />
      <label htmlFor="restaurants">Where to Eat:</label>
      <input
        type="text"
        id="restaurants"
        placeholder="The most important part, food!"
        onChange={handleChange}
        value={formState.restaurants}
      />
      <label htmlFor="comments">Tell us more!</label>
      <input
        type="text-area"
        cols="20"
        rows="10"
        id="comments"
        placeholder="Spill it!"
        onChange={handleChange}
        value={formState.comments}
      />
      <label htmlFor="imageUrl">Share an image:</label>
      <input
        type="text"
        id="imageUrl"
        placeholder="Paste the link here"
        onChange={handleChange}
        value={formState.imageUrl}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ReviewForm
