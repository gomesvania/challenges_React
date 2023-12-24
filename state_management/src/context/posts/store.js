import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const postsStore = configureStore({
  reducer: rootReducer,
});

export default postsStore;