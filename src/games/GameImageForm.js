import React, { useContext } from 'react';
import { GameContext } from './GameProvider';

export const GameImageForm = props => {
  const { gameId } = props;

  const { addImage } = useContext(GameContext);

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    getBase64(e.target.game_image.files[0], async imageBase64 => {
      await addImage(imageBase64, gameId);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" id="game_image" />
      <button type="submit">Upload</button>
    </form>
  );
};