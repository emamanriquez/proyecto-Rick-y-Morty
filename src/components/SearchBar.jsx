import { useState } from "react";
import styled from '../components/SearchBar.module.css';


export default function SearchBar(props ) {
  const [character, setCharacter] = useState(0);
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  return (
    <>
      <input className= {styled.search}
      type="search" 
      placeholder="Search..."
      onChange={handleChange} 
      />
      <button className= {styled.agregar} onClick={() => props.onSearch(character)}>Agregar</button>
      <button className= {styled.random} onClick={props.random}>Random</button>
    </>
  );
}
