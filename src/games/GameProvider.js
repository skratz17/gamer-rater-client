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

  const getGameById = async gameId => {
    const response = await request(`http://localhost:8000/games/${gameId}`);
    const game = await response.json();
    return game;
  };

  const createGame = async game => {
    return await request('http://localhost:8000/games', 'POST', game);
  };

  return (
    <GameContext.Provider value={{ games, getGames, getGameById, createGame }}>
      {props.children}
    </GameContext.Provider>
  );
};