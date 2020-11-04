import React, { createContext, useState } from 'react';

import { request } from '../utils/request';

export const ReviewContext = createContext();

export const ReviewProvider = props => {
  const [ reviews, setReviews ] = useState([]);

  const getReviews = async gameId => {
    const queryString = gameId !== undefined ? `?gameId=${gameId}` : '';

    const result = await request(`http://localhost:8000/reviews${queryString}`);
    const reviews = await result.json();

    setReviews(reviews);
  };

  return (
    <ReviewContext.Provider value={{ reviews, getReviews }}>
      {props.children}
    </ReviewContext.Provider>
  );
};