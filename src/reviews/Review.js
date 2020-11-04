import React from 'react';

export const Review = props => {
  const { review } = props;
  const { rating, timestamp } = review;
  const { first_name, last_name } = review.player.user;

  return (
    <div className="review">
      <p className="review__author">{first_name} {last_name}</p>
      <p className="review__rating">{rating} out of 10</p>
      <p className="review__date">{timestamp}</p>
      <p className="review__text">{review.review}</p>
    </div>
  );
};