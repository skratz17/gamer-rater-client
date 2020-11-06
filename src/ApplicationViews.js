import React from 'react';
import { Route } from 'react-router-dom';
import { GameList } from './games/GameList';
import { GameDetail } from './games/GameDetail';
import { GameProvider } from './games/GameProvider';
import { GameForm } from './games/GameForm';
import { CategoryProvider } from './categories/CategoryProvider';
import { DesignerProvider } from './designers/DesignerProvider';

export const ApplicationViews = () => (
  <>
    <GameProvider>
      <DesignerProvider>
        <CategoryProvider>
          <Route exact path="/" component={GameList} />
          <Route exact path="/games" component={GameList} />
          <Route exact path="/games/create" component={GameForm} />
          <Route exact path="/games/:gameId(\d+)" component={GameDetail} />
          <Route exact path="/games/:gameId(\d+)/edit" component={GameForm} />
        </CategoryProvider>
      </DesignerProvider>
    </GameProvider>
  </>
);