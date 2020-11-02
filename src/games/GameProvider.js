import React, { createContext, useState } from 'react';

import { request } from '../utils/request';

export const GameContext = createContext();

export const GameProvider = props => {
  const [ games, setGames ] = useState([]);

  const getGames = async () => {
    const response = await request('http://localhost:8000/games');
    const games = await response.json();
    setGames(games);
  };

  return (
    <GameContext.Provider value={{ games, getGames }}>
      {props.children}
    </GameContext.Provider>
  );
};