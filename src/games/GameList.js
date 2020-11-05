import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from './GameProvider';
import { GameSearch } from './GameSearch';
import { GameSortControls } from './GameSortControls';

export const GameList = () => {
  const { games, getGames, getGamesBySearchTerm, getSortedGames } = useContext(GameContext);

  const [ sortField, setSortField ] = useState(null);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if(sortField) {
      getSortedGames(sortField)
    }
  }, [ sortField ]);

  const handleSearch = searchTerm => {
    if(searchTerm) {
      getGamesBySearchTerm(searchTerm);
    }
    else {
      getGames();
    }
  };

  return (
    <div>
      <GameSearch onSearch={handleSearch} />
      <GameSortControls onSelect={setSortField} currentSortField={sortField} />

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