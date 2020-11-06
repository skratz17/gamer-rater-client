import React, { useEffect, useContext } from 'react';

import { CategoryContext } from './CategoryProvider';
import './CategoryToggler.css';

export const CategoryToggler = props => {
  const { onToggleCategory } = props;
  const selectedCategories = props.selectedCategories || [];

  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="category-toggler">
      { categories.map(c => (
        <div className="category-toggle">
          <label htmlFor={`category-${c.id}`} className="category-toggle__label">{c.name}</label>
          <input name={`category-${c.id}`}
            id={`category-${c.id}`}
            className="category-toggle__checkbox"
            type="checkbox" 
            value={c.id} 
            checked={selectedCategories.includes(c.id)}
            onChange={() => onToggleCategory(c.id)} />
        </div>
      ))}
    </div>
  );
};