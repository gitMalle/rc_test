import React from "react";
import "../styles/SearchWidget.css";
import { SearchBar } from "./SearchBar";

export const SearchWidget = props => (
  <div className="widget-container">
    <h4>Let's find your ideal car</h4>
    <SearchBar />
  </div>
);
