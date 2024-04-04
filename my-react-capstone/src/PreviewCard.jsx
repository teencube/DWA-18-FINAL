

import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PreviewCard = ({ id, title, image, description, seasons, genres, updated, isFavorite, onToggleFavorite }) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(id);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '180px', height: '300px', overflow: 'hidden' }}>
      <img src={image} alt={title} style={{ maxWidth: '100%', height: '40%' }} />
      <h3 style={{ marginBottom: '5px', fontSize: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h3>
      <p style={{ fontSize: '7px', maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis', wordWrap: 'break-word' }}>{description}</p>
      <p>Seasons: {seasons}</p>
      <p>Genres: {genres.join(', ')}</p>
      <p>Last Updated: {updated}</p>
      <button onClick={handleToggleFavorite}>
        <FavoriteIcon color={isFavorite ? 'primary' : 'inherit'} />
      </button>
    </div>
  );
};

export default PreviewCard;
