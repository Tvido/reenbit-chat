import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore  } from 'redux-persist';
import dialoguesReducer from './dialogues/dialogues';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, dialoguesReducer)

export const store = configureStore({
  reducer: {
    dialogues: persistedReducer
  },
  middleware: [thunk]
});

export const persistor = persistStore(store)