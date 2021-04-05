import React, { useState } from "react";
import { getFromLocalStorageOrDefault } from "../utils/localStorage";
import Post from "./post";

const Favorites = () => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorageOrDefault("fav", [])
  );

  if (favourites.length === 0) {
    window.location.assign("/empty");
  }

  const handleRemovalFromFavourites = (id) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="main">
      <div className="articles">
        <div className="image">
          {favourites.map((fav) => (
            <Post
              key={fav.id}
              img={fav}
              onFavouritesClick={handleRemovalFromFavourites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;