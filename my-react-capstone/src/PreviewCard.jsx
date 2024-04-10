

import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const PreviewCard = ({ id, title, image, description, genres, updated, isFavorite, onToggleFavorite }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite(id);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '180px', height: 'fit-content', overflow: 'hidden' }}>
      <img src={image} alt={title} style={{ maxWidth: '100%', height: '40%' }} />
      <h3 style={{ marginBottom: '5px', fontSize: '9px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h3>
      <p style={{ fontSize: '7px', maxHeight: showFullDescription ? 'none' : '50px', overflow: 'hidden', textOverflow: 'ellipsis', wordWrap: 'break-word' }}>
        {description}
      </p>
      {description.length > 100 && (
        <button onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? 'See Less' : 'See More'}
        </button>
      )}
      <p>Genres: {genres.join(', ')}</p>
      <p style={{fontSize :'9px', fontFamily:'sans-serif', fontWeight:'bolder'}}>Last Updated: {updated}</p>
      <button onClick={handleToggleFavorite}>
        <FavoriteIcon color={isFavorite ? 'primary' : 'inherit'} />
      </button>
      <Link to={`/PodShows/${id}`}>
        <button>Seasons</button>
      </Link>
    </div>
  );
};

export default PreviewCard;
