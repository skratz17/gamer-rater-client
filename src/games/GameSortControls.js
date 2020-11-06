import React from 'react';
import './GameSortControls.css';

export const GameSortControls = props => {
  const { onSelect, currentSortField, className } = props;

  const sortFields = [ 
    { field: 'year', displayName: 'Year' },
    { field: 'duration', displayName: 'Duration' },
    { field: 'designer', displayName: 'Designer Name' }
  ];

  return (
    <div className={`game-sort-controls ${className || ''}`}>
      <label className="game-sort-controls__label italics">sort:</label>
      { sortFields.map(({ field, displayName }) => (
        <button key={field} 
          onClick={() => onSelect(field)}
          className={`game-sort-controls__button ${field === currentSortField.field ? `game-sort-controls__button--${currentSortField.isAscending ? 'asc' : 'desc'}` : ''}`}
        >
          {displayName}
        </button>
      ))}
    </div>
  );
};