import { NavLink } from 'react-router-dom'

const DestinationsCard = (props) => {
  const showDestination = (destination) => {

  }

  return (
    <div className="destinations-container">
      {
      props.destinations.map((destination) => (
        <div className="destination-card" onClick={() => showDestination(destination)} key={destination.id}>
          <NavLink to={`${destination.id}`}>
            <img src={destination.img} alt={destination.name} />
            <h3>{destination.name}</h3>
            </NavLink> 
            </div>
      ))}
      <div className='review'>
        {
          props.reviews.map((review) => (
            <div className='review' onClick={() => showReview(review)} key={review.id}>
              <
          ))
        }
        </div>
      </div>

  
  )
const showReview = (review) => {}

return (
  <div className='review'>
    {
      props.reviews.map((review) => (
        
      ) )
    }
  </div>)


}

export default DestinationsCard