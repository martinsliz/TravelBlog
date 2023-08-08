import { NavLink } from 'react-router-dom'

const ViewAllDestinations = (props) => {
  return (
    <div className="container">
      {props.destinations?.map((destination) => (
        <NavLink to={`/destination/${destination._id}`}>
          <div key={destination._id} className="all">
            <img src={destination.imageOne} alt="" />
            <br />
            <h2 className="name">{destination.name}</h2>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default ViewAllDestinations
