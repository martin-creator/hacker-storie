
function Search(props) {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={props.OnSearch} />
      
    </>
  );
}

export default Search;
