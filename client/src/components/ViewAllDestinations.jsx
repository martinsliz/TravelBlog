import { NavLink } from "react-router-dom"



const ViewAllDestinations = (props) => {

  return (

    <div className='container'>
      {props.destinations?.map((destination) => (
        <NavLink to={`/destination/${destination._id}`} >
        <div className='all' key={destination._id}>
        <img src={destination.imageOne} alt='' />
        <div>{destination.name}</div>
        </div>
        </NavLink>
      ))}
    </div>
 
  )

}

export default ViewAllDestinations