/* eslint-disable no-template-curly-in-string */
import styled from "./Card.module.css";
import { Link } from "react-router-dom";
import {addFav, removeFav} from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


export function Card(props) {
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }
  return (
    <div className={styled.divContainer}>
      {isFav ? (
        <button className={styled.heartRed} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styled.heartWhite} onClick={handleFavorite}>❤</button>
      )}
      <button
        className={styled.divbutton}
        onClick={() => props.onClose(props.id)}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h5>{props.name}</h5>
      </Link>

      <div>
        {/* <h2 className={styled.name}>{props.name}</h2> */}
        <img src={props.image} alt="" />
      </div>
      <div className={styled.divh2}>
        <h2 className={styled.species}>{props.species}</h2>
        <h2 className={styled.gender}>{props.gender}</h2>
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites : state.myFavorites,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: function (character) {
      dispatch(addFav(character))
    },
    removeFav: function(id) {
      dispatch(removeFav(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
