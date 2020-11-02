import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
  const [ games, setGames ] = useState([]);

  const getGames = async () => {
    const response = await fetch('http://localhost:8000/games');
    const games = await response.json();
    setGames(games);
  };

  return (
    <GameContext.Provider values={{ games, getGames }}>
      {props.children}
    </GameContext.Provider>
  );
};