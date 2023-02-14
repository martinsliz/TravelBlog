const DestinationCard = (props) => {
  
  const avgRating = props.avgRating.toFixed(1)

  return (
    <div className="card" onClick={props.onClick}>
    <div className="img-wrapper" >
    <img src={props.image} alt="destination-card" />
    </div>
    <div>
      <h3>{props.name}</h3>
      <h3>{avgRating}</h3>
         </div>
    <button onClick={() => props.onClick}></button>
  </div>
  )
}

export default DestinationCard