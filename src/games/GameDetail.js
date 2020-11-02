import React from 'react';
import { useParams } from 'react-router-dom';

export const GameDetail = () => {
  const { gameId } = useParams();

  return (
    <div>{gameId}</div>
  )
};