import React from 'react';
import Post from './post';

const Articles = ({images}) => {
  return ( 
      <div className="image">
        {images.map(img => (
          <Post
            key={img.id}
            img={img}
          />
        ))}
      </div>
  );
}

export default Articles;