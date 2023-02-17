import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: []
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(e => e.id !== action.payload)
      };
    case FILTER:
      return{
         ...state,
         myFavorites: state.allCharacters.filter((c) => c.gender === action.payload)
      };
      case ORDER:
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((a, b) => {
            if(a.id > b.id){
              if(action.payload === 'Ascendente'){
                return 1
              } else {
                return -1
              }
            }
            else if(a.id < b.id){
              if(action.payload === 'Descendiente'){
                return -1
              } else {
                return 1
              }
            }
          })
        };
    default:
      return state;
  }
};

export default rootReducer;
