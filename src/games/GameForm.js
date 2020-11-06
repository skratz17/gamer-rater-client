import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { CategoryToggler } from '../categories/CategoryToggler';
import { DesignerSelect } from '../designers/DesignerSelect';
import { GameContext } from './GameProvider';

export const GameForm = () => {
  const [ formValues, setFormValues ] = useState({});

  const history = useHistory();
  const location = useLocation();
  const { gameId } = useParams();

  const { createGame, getGameById, updateGame } = useContext(GameContext);

  const isEditMode = location.pathname.includes('edit');

  useEffect(() => {
    if(isEditMode && gameId) {
      getInitialFormValues();
    }
  }, []);

  const getInitialFormValues = async () => {
    const game = await getGameById(gameId);
    setFormValues({
      title: game.title,
      categories: game.categories.map(c => c.id),
      designerId: game.designer.id,
      year: game.year,
      numPlayers: game.num_players,
      estimatedDuration: game.estimated_duration,
      ageRecommendation: game.age_recommendation,
      description: game.description
    });
  };

  const handleCategoryToggle = toggledCategory => {
    const categories = formValues.categories ? [ ...formValues.categories ]: [];
    const categoryIndex = categories.indexOf(toggledCategory);

    if(categoryIndex >= 0) {
      categories.splice(categoryIndex, 1);
    }
    else {
      categories.push(toggledCategory);
    }

    setFormValues({ ...formValues, categories });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if(isEditMode && gameId) {
      await updateGame(gameId, formValues);
      history.push(`/games/${gameId}`);
    }
    else {
      await createGame(formValues);
      history.push('/games');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Title</label>
        <input type="text" name="title" value={formValues.title || ''} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <label>Category</label>
        <CategoryToggler selectedCategories={formValues.categories} onToggleCategory={handleCategoryToggle} />
      </fieldset>

      <fieldset>
        <label>Designer</label>
        <DesignerSelect placeholder="Choose a designer" value={formValues.designerId} onChange={handleChange} name="designerId" />
      </fieldset>

      <fieldset>
        <label>Year Released</label>
        <input type="number" name="year" value={formValues.year || ''} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <label>Number of Players</label>
        <input type="number" name="numPlayers" value={formValues.numPlayers || ''} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <label>Estimated Duration (in minutes)</label>
        <input type="number" name="estimatedDuration" value={formValues.estimatedDuration || ''} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <label>Recommended Age Group</label>
        <input type="number" name="ageRecommendation" value={formValues.ageRecommendation || ''} onChange={handleChange} /><span> and up</span>
      </fieldset>

      <fieldset>
        <label>Description</label>
        <textarea name="description" value={formValues.description || ''} onChange={handleChange} />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};