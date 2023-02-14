const ViewAllDestinations = (props) => {

  return (

    <div className='bucket'>
      {props.destinations?.map((destination) => ( 
        <div key={destination._id}>
        <img src={destination.imageOne} />
        <h2> {destination.name} </h2>
        <h3> Located in: {destination.location}</h3>
        </div>
      ))}
    </div>
 
  )

}

export default ViewAllDestinations