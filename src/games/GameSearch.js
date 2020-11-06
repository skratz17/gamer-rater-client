import React, { useState, useEffect } from 'react';
import './GameSearch.css';

export const GameSearch = props => {
  const [ searchTerm, setSearchTerm ] = useState(null)

  const { onSearch, className } = props;

  useEffect(() => {
    if(searchTerm !== null) {
      const timeoutId = setTimeout(() => onSearch(searchTerm), 500);

      return () => clearTimeout(timeoutId);
    }
  }, [ searchTerm ]);

  return (
    <input type="text" 
      placeholder="Search for a game"
      className={`game-search ${className}`}
      value={searchTerm || ''} 
      onChange={e => setSearchTerm(e.target.value)} />
  );
};