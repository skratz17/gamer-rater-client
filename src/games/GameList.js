import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.title}</Link>
          </li>
        ))
      }
    </ul>
  );
};