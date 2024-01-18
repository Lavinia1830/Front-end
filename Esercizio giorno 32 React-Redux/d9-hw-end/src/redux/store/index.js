import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers/Favourites'
import jobReducer from '../reducers/job'
import favoriteReducer from '../reducers/Favourites'

const bigReducer = combineReducers({
  favourite: favoriteReducer,
  job: jobReducer
})


const store = configureStore({
  reducer: mainReducer,
})

export default store
