import React, { useState, useContext } from 'react';

import { ReviewContext } from './ReviewProvider';
import './ReviewForm.css';

export const ReviewForm = props => {
  const { gameId } = props;

  const [ formValues, setFormValues ] = useState({ rating: 5 });

  const { createReview, getReviews } = useContext(ReviewContext);

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
      timestamp: (new Date()).toISOString()
    }

    await createReview(review);
    await getReviews(gameId);

    setFormValues({ rating: 5 });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h4 className="review-form__header">Write Your Own Review!</h4>

      <fieldset className="review-form__rating-wrapper">
        <input type="range" min="0" max="10" step="1"
          name="rating"
          value={formValues.rating}
          onChange={handleChange} />
        <span className="review-form__rating-value">{formValues.rating} / 10</span>
      </fieldset>

      <fieldset className="review-form__review-wrapper">
        <textarea name="review" 
          rows={5}
          cols={35}
          className="review-form__review"
          value={formValues.review || ''} 
          onChange={handleChange} 
          placeholder="Write a review" />
      </fieldset>

      <button className="btn btn--create" type="submit">Submit Review</button>
    </form>
  );
};