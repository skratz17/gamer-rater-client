import React from 'react';
import { Route } from 'react-router-dom';
import { GameList } from './games/GameList';
import { GameDetail } from './games/GameDetail';
import { GameProvider } from './games/GameProvider';

export const ApplicationViews = () => (
  <>
    <GameProvider>
      <Route exact path="/" component={GameList} />
      <Route exact path="/games" component={GameList} />
      <Route path="/games/:gameId" component={GameDetail} />
    </GameProvider>
  </>
);