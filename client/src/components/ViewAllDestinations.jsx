import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const ViewAllDestinations = (props) => {
  
  
  const [destinations, setDestinations] = useState(null)

  const getDestinations = async () => {
    const response = await axios.get(
      `${BASE_URL}/destinationRouter/destinations`
    )
    setDestinations(response.data.destinations)
    console.log(response.data.destinations)
  }
  useEffect(() => {
    getDestinations()
  }, [])

  return (

    <div className='bucket'>
      {destinations? destinations.map((destination) => ( 
        <div key={destination._id}>
        <img src={destination.imageOne} />
        <h2> {destination.name} </h2>
        <h3> Located in: {destination.location}</h3>
        </div>
      )):<></>}
    </div>
 
  )
}

export default ViewAllDestinations