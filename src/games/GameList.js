import React, { useContext, useEffect } from 'react';
import { GameContext } from './GameProvider';

export const GameList = () => {
  const { games, getGames } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <ul className="game-list">
      {
        games.map(game => (
          <li key={game.id}>{game.title}</li>
        ))
      }
    </ul>
  );
};