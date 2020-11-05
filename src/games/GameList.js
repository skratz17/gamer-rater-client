import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from './GameProvider';
import { GameSearch } from './GameSearch';
import { GameSortControls } from './GameSortControls';

export const GameList = () => {
  const { games, getGames, getGamesBySearchTerm, getSortedGames } = useContext(GameContext);

  const [ sortData, setSortData ] = useState(null);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if(sortData) {
      getSortedGames(sortData.field, sortData.isAscending)
    }
  }, [ sortData ]);

  const handleSearch = searchTerm => {
    if(searchTerm) {
      getGamesBySearchTerm(searchTerm);
    }
    else {
      getGames();
    }
  };

  const handleSortSelect = field => {
    setSortData(prevSortData => {
      const isAscending = field !== prevSortData?.field || !prevSortData.isAscending;
      return { field, isAscending };
    });
  };

  return (
    <div>
      <GameSearch onSearch={handleSearch} />
      <GameSortControls onSelect={handleSortSelect} currentSortField={sortData} />

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