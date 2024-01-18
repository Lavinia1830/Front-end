import {ADD_TO_FAVORITE, REMOVE_TO_FAVORITE} from '../action'

const inistialState = {
  list: []
}

const favoriteReducer = (state = inistialState, action) => {
  switch (action.type){
    case ADD_TO_FAVORITE:
      return{
        ...state,
        list: [...state.list, action.payload],
      }
    case REMOVE_TO_FAVORITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload)
      }
    default: 
      return state
  }
}

export default favoriteReducer