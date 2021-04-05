import React, { useState } from "react";
import { getFromLocalStorageOrDefault } from "../utils/localStorage";

const Post = ({ img, onFavouritesClick }) => {
  const { author, avatar, image, price, title, subtitles, date, id } = img;
  const [isFavourite, setIsFavourite] = useState(
    getFromLocalStorageOrDefault("fav", []).some((favPost) => favPost.id === id)
  );

  const seeBlog = () => {
    localStorage.setItem("blog", JSON.stringify(img));
  };

  const saveFav = () => {
    const currentFavourites = getFromLocalStorageOrDefault("fav", []);
    currentFavourites.push(img);
    localStorage.setItem("fav", JSON.stringify(currentFavourites));
  };

  const removeFromFavorites = () => {
    const currentFavourites = getFromLocalStorageOrDefault("fav", []);
    const filteredFavourites = currentFavourites.filter(
      (favPost) => favPost.id !== id
    );
    localStorage.setItem("fav", JSON.stringify(filteredFavourites));
  };

  const handleFavourite = () => {

    if (onFavouritesClick) {
      onFavouritesClick(id);
    }
    if (isFavourite) {
      removeFromFavorites();
      setIsFavourite(false);
    } else {
      saveFav();
      setIsFavourite(true);
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-4 mb-5 responsive">
      <div className="card">
        <div className="card__image">
          <div className="card__image-items">
          <div className="card__image-price">${price}</div>
            <button className="card__image-star"><i
              className="fas fa-star"
              onClick={handleFavourite}
            ></i></button>
          </div>
          <img
            src={image}
            alt="user"
            className="card-img-top card__image-img"
          />
        </div>
        <div className="card-body card-body-curve">
          <p className="card-title">{title}</p>
          <p className="card-title-sub">{subtitles}</p>
        </div>
        <div className="card-footer footer">
          <img className="avatar" src={avatar} alt="user" />
          <span className="avatar-author">{author}</span>
          <p className="avatar-date">{date}</p>
        </div>
        <a href="/blog" onClick={seeBlog} className="btn btn-primary">
          See Full blog
        </a>
      </div>
    </div>
  );
};

export default Post;