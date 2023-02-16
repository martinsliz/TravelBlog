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
        <div className='description'>
        </div>
        <span className='bucket' >The Bucket-list Bucket!
        Saving you from visiting hundreds of websites by putting everyone's bucket-list trips all in one place!
        </span>
        <div className='cover'>
      <h2>Featured Destination!</h2>
      <img className='coverImage' src={featured.imageOne} alt="Cover" />
      <h3>{featured.name}</h3>
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
