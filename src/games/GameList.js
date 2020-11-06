import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GameContext } from './GameProvider';
import { GameSearch } from './GameSearch';
import { GameSortControls } from './GameSortControls';
import './GameList.css';

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
    <div className="game-list-wrapper">
      <GameSearch className="game-list__search" onSearch={handleSearch} />

      <GameSortControls className="game-list__sort" 
        onSelect={handleSortSelect} 
        currentSortField={sortData} />

      <ul className="game-list">
        {
          games.map(game => (
            <li className="game-list__item" key={game.id}>
              <Link className="game-list__item-title" to={`/games/${game.id}`}>{game.title}</Link>
              <span className="game-list__item-rating"> (avg. rating: {game.average_rating === null ? 'unrated' : game.average_rating} / 10)</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};