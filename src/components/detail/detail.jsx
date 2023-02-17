import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/home");
  }

  const { detailId } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div>
        <h3>Nombre: {character.name}</h3>
        <h5>Status: {character.status}</h5>
        <h5>Especie: {character.species}</h5>
        <h5>Genero: {character.gender}</h5>
        <h5>Origin: {character.origin?.name}</h5>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <button onClick={handleBack}>Back to Home</button>
      </div>
    </div>
  );
}
