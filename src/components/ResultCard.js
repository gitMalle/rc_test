import React from "react";

export const ResultCard = props => {
  const { result } = props;

  const getType = r => {
    switch (r.placeType) {
      case "A":
        return "Airport";
      case "T":
        return "Station";
      case "C":
        return "City";
      case "F":
        return "Region";
      case "P":
        return "Region";
      case "Z":
        return "Place";
    }
  };

  return (
    <div className="result-card">
      <div className="pill-cell">
        <div className={`pill pill-${result.placeType}`}>{getType(result)}</div>
      </div>

      <div className="text-cell">
        <span className="result-header">{result.name}</span>
        <div>
          {result.region}
          {result.region && result.country && ","} {result.country}
        </div>
      </div>
    </div>
  );
};
