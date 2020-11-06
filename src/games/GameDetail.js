import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GameContext } from './GameProvider';
import { GameImageForm } from './GameImageForm';
import { ReviewProvider } from '../reviews/ReviewProvider';
import { ReviewList } from '../reviews/ReviewList';
import { ReviewForm } from '../reviews/ReviewForm';

export const GameDetail = () => {
  const { gameId } = useParams();

  const { getGameById } = useContext(GameContext);

  const [ game, setGame ] = useState(null);

  const _getGameById = async gameId => {
    const _game = await getGameById(gameId);

    setGame(_game);
  }

  useEffect(() => {
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
        game.categories.map(c => <p key={c.id} className="game__category">{c.name}</p>)
      }
      <p className="game__average-rating">Average rating: {game.average_rating} / 10</p>

      {game.images.map(({ image }) => <img src={image} />)}

      <GameImageForm gameId={game.id} onUploadSuccess={() => _getGameById(gameId)} />

      <ReviewProvider>
        <ReviewForm gameId={game.id} />
        <ReviewList gameId={game.id} />
      </ReviewProvider>
    </div>
  )
};