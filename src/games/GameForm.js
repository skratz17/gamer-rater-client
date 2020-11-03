import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { CategorySelect } from '../categories/CategorySelect';
import { DesignerSelect } from '../designers/DesignerSelect';
import { GameContext } from './GameProvider';

export const GameForm = () => {
  const [ formValues, setFormValues ] = useState({});

  const history = useHistory();

  const { createGame } = useContext(GameContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await createGame(formValues);
    history.push('/games');
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Title</label>
        <input type="text" name="title" value={formValues.title || ''} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <label>Category</label>
        <CategorySelect placeholder="Choose a category" value={formValues.categoryId} onChange={handleChange} name="categoryId" />
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

      <button type="submit">Submit</button>
    </form>
  );
};