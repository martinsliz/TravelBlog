import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import DestinationsCard from '../components/DestinationsCard'
import FeatureCard from '../components/FeatureCard'
import { BASE_URL } from '../globals'

const Home = () => {
  const [featured, setFeature] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getFeature = async () => {
      const response = await axios.get(
        `${BASE_URL}/destinationRouter/destination/:id`
      )
      setFeature(response.data.results)
    }
    getFeature()
  }, [])

  const getSearchResults = async (event) => {
    event.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/destination?search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    setSearchQuery('')
    toggleSearched(true)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          value={searchQuery}
          onChange={handleChange}
          onSubmit={getSearchResults}
        />
        {searched && (
          <div>
            <h1>Search Results</h1>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                <Link to={`/destinations/details/${result.id}`} key={result.id}>
                  <Destinations {...result} image={result.background_image} />
                </Link>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="genres">
        <h1>This Month's Featured Destination!</h1>
        <section className="container-grid">
          {features.map((feature) => (
            <Link to={`/view/games/${feature.id}`} key={feature.id}>
              <FeatureCard
                name={feature.name}
                image={feature.image}
                {...genre}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
