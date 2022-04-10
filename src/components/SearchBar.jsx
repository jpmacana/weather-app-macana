import React from 'react';
import Styles from "./SearchBar.module.css"
import {GoSearch} from "react-icons/go";

export default function SearchBar({onSearch}) {
  
function handleOnSearch() {
  if (typeof onSearch === "function") {
    const input = document.getElementById('search-bar-input')
    onSearch(input.value)
    
  }
}

  return <div className={Styles.searchBar}>
    <input placeholder="Agrega una nueva ciudad" id="search-bar-input" />
    <button onClick={handleOnSearch} > <GoSearch/> </button>
  </div>
};