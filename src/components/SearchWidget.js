import React from "react";
import "../styles/SearchWidget.css";
import { SearchBar } from "./SearchBar";

export const SearchWidget = props => (
  <div className="widget-container">
    <h3>Let's find your ideal car</h3>
    <div className="form-group">
      <label>Pick-up location</label>
      <SearchBar />
    </div>
  </div>
);
