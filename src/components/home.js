import React, { Fragment, useState, useEffect } from "react";
import Searchbar from "./searchBar";
import Articles from "./articles";
import Emptystate from "./emptyState";

const isItAtLastPage = (count, currentVisibleCount) =>
  count % currentVisibleCount === count;

const Home = () => {
  const [result, saveResult] = useState("");
  const [images, saveImage] = useState([]);
  const [notFound, saveNotfound] = useState(false);
  const [visibleCountMultiplier, setVisibleCountMultiplier] = useState(1);

  useEffect(() => {
    const Api = async () => {
      setVisibleCountMultiplier(1);

      const url = `https://json-server-mock.herokuapp.com/data?q=${result}`;
      const ans = await fetch(url);
      const data = await ans.json();
      saveImage(data);
      if (data.length === 0) {
        saveNotfound(true);
        return;
      }
      saveNotfound(false);
    }
    Api();
  }, [result]);

  const incrementMultiplier = () => {
    setVisibleCountMultiplier(visibleCountMultiplier + 1);
  };

  const imagesToShow = images.slice(0, visibleCountMultiplier * 6);

  return ( 
    <Fragment>
      <Searchbar saveResult={saveResult} />
      <div className="main">
        <div className="articles">
          {notFound ? <Emptystate /> : <Articles images={imagesToShow} />}
        </div>
      </div>
      {isItAtLastPage(
        imagesToShow.length,
        visibleCountMultiplier * 6
      ) ? null : (
        <div className="main">
          <div className="container">
            <button onClick={incrementMultiplier} className="load-more">Load more <div className="load-more-arrow">&rarr;</div></button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
