import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
  const [ games, setGames ] = useState([]);

  const getGames = async () => {
    const response = await fetch('http://localhost:8000/games', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('gamer_rater_token')}`
      }
    });
    const games = await response.json();
    console.log(games);
    setGames(games);
  };

  return (
    <GameContext.Provider value={{ games, getGames }}>
      {props.children}
    </GameContext.Provider>
  );
};