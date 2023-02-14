import { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import ViewAllDestinations from './ViewAllDestinations'

const Home = (props) => {
  const [main, setMain ] = useState()

  useEffect(() => {
    const getMain = () => {
      const response = 
      setMain()
    }
    getMain()
  }, [])

  return (
    <div className="main">
      <div>
        <h1>The Bucket-list Bucket!</h1>
        <p>We're saving you from visiting hundreds of websites by putting everyone's bucket-list trips all in one place!</p>
      <h1>This Month's Featured Destination!</h1>
      <section className="image-container">
      {/* <img src={props.destination.imageOne} alt="Background" /> */}
    </section>
      </div>
    </div>
  )
}

export default Home
