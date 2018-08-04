import React from 'react';
import PostList from "./Components/PostList";
import Navigation from "./Components/Navigation";

const Landing = () => (
  <div className="wrapper">
    <header className="header">
     <div className="header__right">
       <Navigation className="header__nav" />
     </div>
      <div className="header__left search">
        <label htmlFor="search-input"> Search post</label>
        <input type="text" className="search__input" id="search__input"/>
      </div>

    </header>
    <PostList />
  </div>
);

export default Landing;
