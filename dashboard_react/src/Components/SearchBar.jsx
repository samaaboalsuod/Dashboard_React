import React, { Component } from 'react';
import './SearchBar.css'

import SearchIcon from '../Assets/searchIcon.svg'

const SearchBar = (props) => {
    return ( <>
    
    <div className="searchBar">
  <img src={SearchIcon} alt="SearchIcon" />
  <input 
    type="text" 
    placeholder={props.SearchText}
    className="searchInput"
  />
</div>
    
    
    </> );
}
 
export default SearchBar;