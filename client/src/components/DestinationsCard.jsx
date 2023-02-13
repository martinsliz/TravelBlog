const DestinationsCard = (props) => {
  return (
    <div className="card destinations">
    <div className="img-wrapper">
      <img src={props.image} alt="Destination" />
    </div>
    <div className="info-wrapper flex-row space">
      <h3>{props.name}</h3>
      <h1>{props.rating}</h1>
    </div>
  </div>
  )
}

export default DestinationsCard