import React, { useState, useEffect } from 'react';

export const GameSearch = props => {
  const [ searchTerm, setSearchTerm ] = useState(null)

  const { onSearch } = props;

  useEffect(() => {
    if(searchTerm !== null) {
      const timeoutId = setTimeout(() => onSearch(searchTerm), 500);

      return () => clearTimeout(timeoutId);
    }
  }, [ searchTerm ]);

  return (
    <input type="text" value={searchTerm || ''} onChange={e => setSearchTerm(e.target.value)} />
  );
};