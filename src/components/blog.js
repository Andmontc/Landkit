import React from 'react';

const Blog = () => {

  const data = JSON.parse(localStorage.getItem('blog'));
  
  return ( 
    <div className="main">
      <div className="blog">
        <h1 className="blog__title">{data.title}</h1>
        <p className="blog__subtitle">{data.subtitles}</p>
        <div className="blog__info">
          <img src={data.avatar} alt="avatar" />
          <div className="blog__info-author">
            <p className="author">{data.author}</p>
            <p className="date">Published {data.date}</p>
          </div>
          <div className="blog__info-social">
              <p>SHARE:</p>
              <a href="https://www.linkedin.com/in/andmontc/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram icon"></i></a>
              <a href="http://www.facebook.com/andmont" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-square icon"></i></a>
              <a href="http://www.twitter.com/damstyx" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter icon"></i></a>
          </div>
        </div>
        <div className="blog__img">
          <img src={data.image} alt="blog" />
          <caption> This is a caption on this photo for reference </caption>
        </div>
        <div className="blog__body">
          {data.body}
        </div>
      </div>
    </div>
  );
}

export default Blog;