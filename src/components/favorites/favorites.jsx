import Card from "../Card";
import { connect,  } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import {useDispatch} from 'react-redux'


export function Favorites({ myFavorites }) {
  
  const dispatch = useDispatch();
  function handleClick(e) {
    const { name, value } = e.target;
    if (name === "order") dispatch(orderCards(value));
    if (name === "gender") dispatch(filterCards(value));
  }
  return (
    <div>
      <div>
        <label>
          <select name="order" onClick={handleClick}>
            <option value="Ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </label>
        <label>
          <select name="gender" onClick={handleClick}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
      </div>

      {myFavorites.length === 0 ? (
        <p style={{ color: "white", marginTop: "150px", fontSize: "30px" }}>
          ¡Agrega un favorito!
        </p>
      ) : (
        myFavorites.map((e, i) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={false}
            fav={true}
            key={i++}
          />
        ))
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
