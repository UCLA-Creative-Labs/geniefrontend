import React from "react";

const SearchBar = props => (
    <div class="search">
        <img class="glass" src={require('../../assets/images/search.png')}/>
        <input class="search-text" type="search" placeholder="Search..."/>
    </div>
);

export default SearchBar;