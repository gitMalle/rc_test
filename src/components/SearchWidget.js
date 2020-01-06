import React from "react";
import "../styles/SearchWidget.css";
import { SearchBar } from "./SearchBar";

export const SearchWidget = props => (
  <div className="widget-container">
    <h4>Let's find your ideal car</h4>
    <div className="form-group mt-4">
      <label>Pick-up location</label>
      <SearchBar />
    </div>
  </div>
);
