import React from 'react';
import './Review.css';

export const Review = props => {
  const { review } = props;
  const { rating, timestamp } = review;

  return (
    <div className="review">
      <div className="review__top-line">
        <p className="review__author">{review.player.full_name}</p>
        <p className="review__rating">{rating} out of 10</p>
      </div>
      <p className="review__date">{timestamp}</p>
      <p className="review__text">{review.review}</p>
    </div>
  );
};