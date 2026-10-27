import { useState } from 'react';

function FavoriteButton({ name }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button type="button" onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? "במועדפים ❤️" : "הוספת " + name + " למועדפים 🤍"}
    </button>
  );
}

export default FavoriteButton;
