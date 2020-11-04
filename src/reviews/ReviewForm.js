import React, { useState, useContext } from 'react';

export const ReviewForm = () => {
  const [ formValues, setFormValues ] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="review" 
        value={formValues.review || ''} 
        onChange={handleChange} 
        placeholder="Write a review" />

      <button type="submit">Submit Review</button>
    </form>
  );
};