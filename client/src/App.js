import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import Header from './components/Header'
import About from './components/About'
import './styles/App.css'
import Home from './components/Home'
import ViewAllDestinations from './components/ViewAllDestinations'
import DestinationDetails from './components/DestinationDetails'
import ReviewForm from './components/ReviewForm'

const App = () => {
  const [destinations, setDestinations] = useState([])
  const [details, setDetails] = useState('')

  const getDestinations = async () => {
    const response = await axios.get(
      `${BASE_URL}/destinationRouter/destinations`
    )
    console.log(response.data)
    setDestinations(response.data.destinations)
  }

  useEffect(() => {
    getDestinations()
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home destinations={destinations} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/destinations"
            element={<ViewAllDestinations destinations={destinations} />}
          />
          <Route
            path="/destination/:id"
            element={
              <DestinationDetails
                destinations={destinations}
                details={details}
                setDetails={setDetails}
              />
            }
          />
          <Route path="/addReview" element={<ReviewForm details={details} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
