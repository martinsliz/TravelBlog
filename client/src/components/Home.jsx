import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
  const [featured, setFeatured] = useState({})

  useEffect(() => {
    const getFeatured =
      props.destinations[Math.floor(Math.random() * props.destinations.length)]

    setFeatured(getFeatured)
  }, [props.destinations])

  return (
    <div className="home">
      {featured && (
        <div className="description">
          <div className="description"></div>
          <div className="cover">
            <span className="bucket">
              The Bucket-list Bucket! <br />
              Saving you from visiting hundreds of websites by putting
              everyone's bucket-list trips all in one place!
            </span>
            <h2 className="bucket">
              <u>Featured Destination!</u>
            </h2>
            <img className="coverImage" src={featured.imageOne} alt="Cover" />
            <h3 className="feature">{featured.name}</h3>
          </div>
          <div className="viewAll">
            <NavLink to="/destinations">View More...</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
