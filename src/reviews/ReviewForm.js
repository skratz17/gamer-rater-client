import React, { useState, useContext } from 'react';

export const ReviewForm = () => {
  const [ formValues, setFormValues ] = useState({ rating: 5 });

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
      <fieldset>
        <label>Rating</label>
        <input type="range" min="0" max="10" step="1"
          name="rating"
          value={formValues.rating}
          onChange={handleChange} />
        <span>{formValues.rating}</span>
      </fieldset>

      <fieldset>
        <textarea name="review" 
          value={formValues.review || ''} 
          onChange={handleChange} 
          placeholder="Write a review" />
      </fieldset>

      <button type="submit">Submit Review</button>
    </form>
  );
};