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

  const getGamesBySearchTerm = async searchTerm => {
    const response = await request(`http://localhost:8000/games?q=${searchTerm}`);
    const games = await response.json();
    setGames(games);
  };

  const getSortedGames = async (orderBy, isAscending = true) => {
    const response = await request(`http://localhost:8000/games?orderby=${orderBy}&direction=${isAscending ? 'asc' : 'desc'}`);
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

  const updateGame = async (gameId, game) => {
    return await request(`http://localhost:8000/games/${gameId}`, 'PUT', game);
  };

  const addImage = async (imageBase64, gameId) => {
    const requestData = {
      image: imageBase64,
      gameId
    };

    return await request('http://localhost:8000/images', 'POST', requestData);
  };

  return (
    <GameContext.Provider value={{ 
      games, getGames, getGamesBySearchTerm, getSortedGames, getGameById, 
      createGame, updateGame, addImage
    }}>
      {props.children}
    </GameContext.Provider>
  );
};