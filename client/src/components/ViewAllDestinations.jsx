import { NavLink } from "react-router-dom"



const ViewAllDestinations = (props) => {

  return (

    <div className='bucket'>
      {props.destinations?.map((destination) => (
        <NavLink to={`/destination/${destination._id}`} >
        <div key={destination._id}>
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