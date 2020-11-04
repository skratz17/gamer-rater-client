import React, { useContext, useEffect } from 'react';

import { ReviewContext } from './ReviewProvider';

export const ReviewList = props => {
  const { gameId } = props;

  const { reviews, getReviews } = useContext(ReviewContext);

  useEffect(() => {
    if(gameId) {
      getReviews(gameId);
    }
  }, []);

  console.log(reviews);

  return (
    <div className="review-list">
    </div>
  );
};