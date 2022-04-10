import React from 'react';
import Styles from "./SearchBar.module.css"
import {GoSearch} from "react-icons/go";

export default function SearchBar({onSearch}) {
  
function handleOnSearch(event) {
  event.preventDefault();
  if (typeof onSearch === "function") {
    const input = document.getElementById('search-bar-input')
    onSearch(input.value)
    input.value = '';
    
  }
}

  return <form className={Styles.searchBar} onSubmit={handleOnSearch}>
    <input placeholder="Agrega una nueva ciudad" id="search-bar-input" />
    <button type='submit'> <GoSearch/> </button>
  </form>
};