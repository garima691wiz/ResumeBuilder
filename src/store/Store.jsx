// redux/store.js

// Import necessary functions and modules from Redux Toolkit and Redux
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Import slices (reducers) for different parts of the state
import templateSlice from './slice/template';
import informationSlice from "./slice/slice4";

// Combine individual slices into a single root reducer
const rootReducer = combineReducers({
  // Add each slice to the root reducer with a key representing the slice of state it manages
  template: templateSlice,
  information: informationSlice,
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

// Export the configured store so it can be used in the application
export default store;
