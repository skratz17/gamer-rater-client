import React, { useState, useContext } from 'react';
import { ReviewContext } from './ReviewProvider';

export const ReviewForm = props => {
  const { gameId } = props;

  const [ formValues, setFormValues ] = useState({ rating: 5 });

  const { createReview } = useContext(ReviewContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const review = {
      ...formValues,
      gameId,
      timestamp: (new Date()).toISOString
    }

    await createReview(review);
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