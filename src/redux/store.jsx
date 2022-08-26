import { configureStore } from '@reduxjs/toolkit';
import dialoguesReducer from './dialogues/dialogues';

export const store = configureStore({
  reducer: {
    dialogues: dialoguesReducer
  },
});
