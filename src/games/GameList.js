import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from './GameProvider';
import { GameSearch } from './GameSearch';

export const GameList = () => {
  const { games, getGames } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <GameSearch onSearch={searchTerm => console.log(searchTerm)} />
      <Link to="/games/create">Create New Game</Link>
      <ul className="game-list">
        {
          games.map(game => (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.title}</Link>
              <span> (avg. rating: {game.average_rating} / 10)</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};