import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Home = (props) => {

  const [featured, setFeatured] = useState({})

  
  
  useEffect(() => {
    const getFeatured = props.destinations[3]
    // [Math.floor(Math.random() * props.destinations.length)]
      
    setFeatured(getFeatured)


  
  }, [props.destinations])

  return (
    <div className="home">
      {featured && 
      <div className='description'>
        <h1>The Bucket-list Bucket!</h1>
        <h1>Saving you from visiting hundreds of websites by putting everyone's bucket-list trips all in one place!</h1>
      <h1>Featured Destination!</h1>
        <div className='cover'>
      <img src={featured.imageOne} alt="Cover" />
      </div>
      <div className='viewAll'>
      <NavLink to="/viewAllDestinations">View More...</NavLink>
      </div>
      </div>
      }
    </div>

  )
}

export default Home
