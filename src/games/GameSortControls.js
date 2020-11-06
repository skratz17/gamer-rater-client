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
      { sortFields.map(({ field, displayName }) => {
        const buttonClassNames = [ 'game-sort-controls__button' ];

        if(currentSortField?.field === field) {
          const directionModifier = currentSortField.isAscending ? 'asc' : 'desc';
          buttonClassNames.push(`game-sort-controls__button--${directionModifier}`);
        }

        return (
          <button key={field} 
            onClick={() => onSelect(field)}
            className={buttonClassNames.join(' ')}
          >
            {displayName}
          </button>
        );
      }
      )}
    </div>
  );
};