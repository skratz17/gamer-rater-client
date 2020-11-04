import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GameContext } from './GameProvider';
import { ReviewProvider } from '../reviews/ReviewProvider';
import { ReviewList } from '../reviews/ReviewList';
import { ReviewForm } from '../reviews/ReviewForm';

export const GameDetail = () => {
  const { gameId } = useParams();

  const { getGameById } = useContext(GameContext);

  const [ game, setGame ] = useState(null);

  useEffect(() => {
    const _getGameById = async gameId => {
      const _game = await getGameById(gameId);
      console.log(_game);

      setGame(_game);
    }

    _getGameById(gameId);
  }, []);

  if(game === null) {
    return <div>loading...</div>;
  }

  return (
    <div className="game">
      <h2 className="game__title">{game.title} ({game.year})</h2>
      <p className="game__designer">{game.designer ? game.designer.name : 'Unknown Developer'}</p>
      <p className="game__description">{game.description}</p>
      <p className="game__num-players">Up to {game.num_players} players</p>
      <p className="game__estimated-duration">Average game lasts {game.estimated_duration} minutes</p>
      <p className="game__age-recommendation">Recommended for players {game.age_recommendation} years of age and up</p>
      {
        game.categories.map(({ category }) => <p key={category.id} className="game__category">{category.name}</p>)
      }

      <ReviewProvider>
        <ReviewForm />
        <ReviewList gameId={game.id} />
      </ReviewProvider>
    </div>
  )
};