import { useState } from "react";
function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <h2>
        <strong>{searchTerm}</strong>
      </h2>
    </>
  );
}

export default Search;
