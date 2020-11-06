import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GameContext } from './GameProvider';
import { GameImageForm } from './GameImageForm';
import { ReviewProvider } from '../reviews/ReviewProvider';
import { ReviewList } from '../reviews/ReviewList';
import { ReviewForm } from '../reviews/ReviewForm';
import './GameDetail.css';

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
      <ul className="game__quick-facts">
        <li className="game__num-players">Up to {game.num_players} players.</li>
        <li className="game__estimated-duration">Average game lasts {game.estimated_duration} minutes.</li>
        <li className="game__age-recommendation">Recommended for players {game.age_recommendation} years of age and up.</li>
      </ul>

      <div className="game__additional-info">
        <ul className="game__categories">
          <li>Categories:</li>
          {
            game.categories.map(c => <li key={c.id} className="game__category">{c.name}</li>)
          }
        </ul>
        <p className="game__average-rating">Average rating: {game.average_rating} / 10</p>
      </div>

      <div className="game__images">
        {game.images.map(({ image }) => <img className="game__image" src={image} />)}
      </div>

      <GameImageForm gameId={game.id} onUploadSuccess={() => _getGameById(gameId)} />

      <ReviewProvider>
        <ReviewList gameId={game.id} />
        <ReviewForm gameId={game.id} />
      </ReviewProvider>
    </div>
  )
};