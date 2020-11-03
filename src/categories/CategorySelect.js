import React, { useEffect, useContext } from 'react';
import { CategoryContext } from './CategoryProvider';

export const CategorySelect = props => {
  const { value, onChange, name, placeholder } = props;

  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="0" disabled>{placeholder}</option>
      {
        categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
      }
    </select>
  )
};