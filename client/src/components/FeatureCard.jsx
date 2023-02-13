const FeatureCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
    <div className="img-wrapper" >
    <img src={props.image} alt="Featured Destination" />
    </div>
    <div className="info-wrapper flex-row">
      <h3>{props.name}</h3>
         </div>
    <button onClick={() => props.onClick}></button>
  </div>
  )
}

export default FeatureCard