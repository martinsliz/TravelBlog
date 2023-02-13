import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const DestinationDetails = () => {
  const [destinationDetails, setDestinationDetails] = useState({})

  let { destinationId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getDestinationDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/destinationRouter/destination/${destinationId}`
      )
      if (!isCancelled) {
        setDestinationDetails(response.data)
      }
    }
    getDestinationDetails()
    return () => {
      isCancelled = true
    }
  }, [destinationId])

  return (
    <div className="game-content">
      <div>
        <h1>{gameDetails.name}</h1>
      </div>
      <section className="image-container">
        <a href={gameDetails.website}>
          <img src={gameDetails.background_image} alt="Background" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row game-details">
          <div className="detail">
            <h3>Released: {gameDetails.released}</h3>
          </div>
          <div className="detail">
            <h3>MetaCritic Score: {gameDetails.metacritic}</h3>
          </div>
          <div className="detail">
            <h3>Rating: {gameDetails.rating}</h3>
          </div>
        </div>
        <div className="flex-col">
          <h3>Description</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
