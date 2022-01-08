import { configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers';

const store = configureStore({
  nav: navReducer,
})

export default store