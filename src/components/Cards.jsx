import Card from "./Card";
import styled from "./Card.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styled.gridcontainer}>
      {characters.map((e) => (
        <Card
          key={e.name}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          onClose={props.onClose}
          id={e.id}
        />
      ))}
    </div>
  );
}
