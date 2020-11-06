import React, { useContext, useEffect } from 'react';

import { ReviewContext } from './ReviewProvider';
import { Review } from './Review';
import './ReviewList.css';

export const ReviewList = props => {
  const { gameId } = props;

  const { reviews, getReviews } = useContext(ReviewContext);

  useEffect(() => {
    if(gameId) {
      getReviews(gameId);
    }
  }, []);

  if(!gameId) {
    return null;
  }

  return (
    <div className="review-list-wrapper">
      <h3 className="review-list__header">Reviews</h3>
      <div className="review-list">
        { reviews.map(r => <Review key={r.id} review={r} />)}
      </div>
    </div>
  );
};