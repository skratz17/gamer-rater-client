import React from 'react';
import './Header.css';

export const Header = () => (
  <header className="header">
    <h1 className="header__siteTitle">GamerRater</h1>
    <p className="header__slogan">What game(r)s are on <span className="italics">your</span> rater? (Note: "rater" is to be read to sound like "radar", so it's like a pun).</p>
  </header>
);