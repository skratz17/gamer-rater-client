import React from 'react';
import { Route } from 'react-router-dom';
import { GameList } from './games/GameList';
import { GameProvider } from './games/GameProvider';

export const ApplicationViews = props => (
  <>
    <GameProvider>
      <Route path="/games" component={GameList} />
    </GameProvider>
  </>
);