// store.js
import { configureStore } from '@reduxjs/toolkit';
import buildsReducer from './features/buildsSlice';
import customsReducer from './features/customsSlice';
import bugsReducer from './features/bugsSlice';
import skinsReducer from './features/skinsSlice'; 
import tournamentsReducer from './features/tournamentsSlice';
import metaReducer from './features/metaSlice';
import teamFindersReducer from './features/teamFindersSlice';
import updatesReducer from './features/updatesSlice';

const store = configureStore({
  reducer: {
    builds: buildsReducer,
    customs: customsReducer,
    bugs: bugsReducer,
    skins : skinsReducer, 
    tournaments: tournamentsReducer,
    meta: metaReducer,
    teamFinders: teamFindersReducer,
    updates: updatesReducer,
  },
});

export default store;