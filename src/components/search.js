
const Search = (props) => (

    <>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" value={props.search} onChange={props.onSearch} />
    
  </>
);


  
   


export default Search;
