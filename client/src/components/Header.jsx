import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/viewAllDestinations">Destinations</NavLink>
      {/* <NavLink to="/viewAllReviews">Reviews</NavLink> */}
    </nav>
  </header>
  )
}

export default Header