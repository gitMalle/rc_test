import React, { useState } from "react";
import "../styles/SearchBar.css";

export const SearchBar = props => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input
        type="text"
        className="form-control search-bar"
        placeholder="city, airport, station, region and district..."
        value={searchText}
        onChange={ev => setSearchText(ev.target.value)}
        autoFocus
      />
    </div>
  );
};
