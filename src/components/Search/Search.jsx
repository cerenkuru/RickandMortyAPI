import React from "react";
import "./Search.css";

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="search-wrapper">
      {/* Search bileşeni */}
      <form className="search" onSubmit={searchBtn}>
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value); // Kullanıcı yazdıkça search state'ini güncelle
          }}
          placeholder="Search for characters"
          className="input"
          type="text"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
