import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"
import axios from "axios"

const UpdateReview = (props) => {
  let { id } = useParams()
  let navigate = useNavigate()

const [formState, setFormState] = useState({})


const findReview = () => {
  let foundReview = props.reviews.filter((review) => {
  return review._id === id

  
})
setFormState(foundReview[0])
console.log(foundReview)
}

const handleChange = (event) => {
  setFormState({...formState, [event.target.id]: event.target.value})
}


const handleSubmit = async (event) => {
  event.preventDefault()
  let newReview = {
    rating: formState.rating,
    affordable: formState.affordable
  }
  
  await axios.put(`${BASE_URL}/reviewRouter/review/:id`, formState)
  setFormState({})
  navigate(`/destination/${details._id}`)
}




useEffect(() => {
findReview()
},[])






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







export default UpdateReview