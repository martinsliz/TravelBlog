import { NavLink } from "react-router-dom"



const ViewAllDestinations = (props) => {

  return (

    <div className='container'>
      {props.destinations?.map((destination) => (
        <NavLink to={`/destination/${destination._id}`} >
        <div className='all' key={destination._id}>
        <img src={destination.imageOne} alt='' />
        <h2> {destination.name} </h2>
        <h3> Located in: {destination.location}</h3>
        </div>
        </NavLink>
      ))}
    </div>
 
  )

}

export default ViewAllDestinations