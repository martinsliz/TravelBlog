import { useEffect, useState } from 'react'


const Home = (props) => {

  const [featured, setFeatured] = useState({})

  
  
  useEffect(() => {
    
    const getFeatured = props.destinations[Math.floor(Math.random() * props.destinations.length)]
      
      setFeatured(getFeatured)

  }, [props.destinations])

  return (
    <div className="main">
      {featured && 
      <div>
        <h1>The Bucket-list Bucket!</h1>
        <p>We're saving you from visiting hundreds of websites by putting everyone's bucket-list trips all in one place!</p>
      <h1>Today's Featured Destination!</h1>
      <section className="image-container">
        <div>
      <img src={featured.imageOne} alt="Background" />
      </div>
    </section>
      </div>
      }
    </div>

  )
}

export default Home
