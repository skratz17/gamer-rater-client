import React from 'react';

export const GameSortControls = props => {
  const { onSelect, currentSortField, className } = props;

  const sortFields = [ 
    { field: 'year', displayName: 'Year' },
    { field: 'duration', displayName: 'Duration' },
    { field: 'designer', displayName: 'Designer Name' }
  ];

  return (
    <div className={`game-sort-controls ${className || ''}`}>
      { sortFields.map(({ field, displayName }) => (
        <button key={field} 
          onClick={() => onSelect(field)}
          className={`game-sort-controls__button ${field === currentSortField ? 'game-sort-controls__button--selected' : ''}`}
        >
          {displayName}
        </button>
      ))}
    </div>
  );
};