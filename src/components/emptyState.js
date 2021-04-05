import React from 'react';
import notfound from '../assets/notfound.png';

const Emptystate = () => {
  return ( 
    <div className="main">
        <div className="articles__container">
          <div className="articles__text">
            <h1>Uh Oh.</h1>
            <p>We ran into an issue, but don’t worry,<br/> we’ll take care of it for sure.</p>
            <div className="articles__text-btn">
              <a href="/">Back to safety</a>
            </div>
          </div>
          <div className="articles__notfound">
            <img src={notfound} alt="not found" />
          </div>
        </div>
    </div>
  );
}

export default Emptystate;