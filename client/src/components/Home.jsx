import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Home = (props) => {

  const [featured, setFeatured] = useState({})

  
  
  useEffect(() => {
    const getFeatured = props.destinations[Math.floor(Math.random() * props.destinations.length)]
      
    setFeatured(getFeatured)


  
  }, [props.destinations])

  return (
    <div className="home">
      {featured && 
      <div>
        <h1>The Bucket-list Bucket!</h1>
        <h3>We're saving you from visiting hundreds of websites by putting everyone's bucket-list trips all in one place!</h3>
      <h1>Featured Destination!</h1>
        <div>
      <img src={featured.imageOne} alt="Background" />
      </div>
      <NavLink to="/viewAllDestinations">View More...</NavLink>
      </div>
      }
    </div>

  )
}

export default Home
