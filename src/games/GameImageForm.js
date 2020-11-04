import React from 'react';

export const GameImageForm = () => {
  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();

    getBase64(e.target.game_image.files[0], base64ImageString => {
      console.log("here is the base 64", base64ImageString)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" id="game_image" />
      <button type="submit">Upload</button>
    </form>
  );
};