import React, { useContext, useEffect } from 'react';

import { ReviewContext } from './ReviewProvider';
import { Review } from './Review';

export const ReviewList = props => {
  const { gameId } = props;

  const { reviews, getReviews } = useContext(ReviewContext);

  useEffect(() => {
    if(gameId) {
      getReviews(gameId);
    }
  }, []);

  return (
    <div className="review-list">
      <h3 className="review-list__header">Reviews</h3>
      { reviews.map(r => <Review key={r.id} review={r} />)}
    </div>
  );
};