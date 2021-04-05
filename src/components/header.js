import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return ( 
    <div className="container">
      <nav className="navbar">
        <img src={logo} alt="logo"></img>
        <div className="navbar__links">
          <a href="/" className="navbar__links-item">Articles</a>
          <a href="/favorites" className="navbar__links-item fav">Favorites</a>
        </div>
      </nav>
    </div>
   );
}

export default Header;