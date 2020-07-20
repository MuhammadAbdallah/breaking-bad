import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Search = ({ getQuery }) => {
  const handleChange = (event) => {
    const textInput = event.target.value;
    getQuery(textInput);
  };

  return (
    <div className="search ">
      <input
        className="form-control"
        onChange={handleChange}
        placeholder="Search characters"
      />
    </div>
  );
};
export default Search;
