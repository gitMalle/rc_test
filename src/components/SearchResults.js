import React from 'react';
import "../styles/SearchResults.css";
import { ResultCard } from './ResultCard';

export const SearchResults = props => {
    const { results } = props;
    
    return (
        <div className="results-wrapper">
            {results.map(result => (
                <ResultCard key={result.bookingId} result={result} />
            ))}
        </div>
    )
}