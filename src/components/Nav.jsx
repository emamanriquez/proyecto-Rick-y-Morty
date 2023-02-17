import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(props) {
  // const {onSearch} = props;

  return (
    <>
      <SearchBar onSearch={props.onSearch} random={props.random} />
      <div>
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/favorites">Favorites</Link>
        
        <button onClick={props.logout}>Logout</button>
      </div>
    </>
  );
}
