import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SearchBar.css";

export const SearchBar = props => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchText.length > 1) {
        fetchResults();
    }
  }, [searchText]);

  const fetchResults = async () => {
    const res = await axios.get(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&amp;solrRows=6&solrTerm=${searchText}`);
    setResults(res.data.results.docs);
    console.log(res.data.results.docs);
  };

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
