import { useState } from "react";

const Favorites = () =>{
  
    const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <div>
          {favorites.map((favoriteId) => (
            <PreviewCard
              key={favoriteId}
              {...getShowById(favoriteId)} // Assuming you have a function to get show details by ID
              isFavorite
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
    
  );
}

export default Favorites;

