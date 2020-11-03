import React from 'react';
import { Route } from 'react-router-dom';
import { GameList } from './games/GameList';
import { GameDetail } from './games/GameDetail';
import { GameProvider } from './games/GameProvider';
import { GameForm } from './games/GameForm';
import { CategoryProvider } from './categories/CategoryProvider';

export const ApplicationViews = () => (
  <>
    <GameProvider>
      <CategoryProvider>
        <Route exact path="/" component={GameList} />
        <Route exact path="/games" component={GameList} />
        <Route path="/games/create" component={GameForm} />
        <Route path="/games/:gameId(\d+)" component={GameDetail} />
      </CategoryProvider>
    </GameProvider>
  </>
);