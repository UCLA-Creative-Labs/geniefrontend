import React from 'react';

const SearchBar = () => (
  <div className="search">
    <img className="glass" src={require('../../assets/images/search.png')} />
    <input className="search-text" type="search" placeholder="Search..." />
  </div>
);

export default SearchBar;
