import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';
import { MainReducer } from './Reducer';

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
};

const INITIAL_STATE = {};

// persisting the reducers
const persistedReducer = persistReducer(persistConfig, MainReducer);


// initiating the store 
export const Store = createStore(persistedReducer, INITIAL_STATE, applyMiddleware(thunk));

// intiating the persistor
export const Persistor = persistStore(Store);
