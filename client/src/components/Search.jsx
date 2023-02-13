const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
    <input
type="text"
name="search"
value={props.value}
placeholder="Search Destinations"
onChange={props.onChange}
></input>
<button>Submit</button>
  </form>
  )
}

export default Search