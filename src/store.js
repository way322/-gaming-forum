// store.js
import { configureStore } from '@reduxjs/toolkit';
import buildsReducer from './features/buildsSlice';
import customsReducer from './features/customsSlice';
import bugsReducer from './features/bugsSlice';
import csBugsReducer from './features/csBugsSlice'; 
import throwsReducer from './features/throwsSlice'; 
import workshopReducer from './features/workshopSlice'; 
import antiCheatReducer from './features/antiCheatSlice'; 
import skinsReducer from './features/skinsSlice'; 
import tournamentsReducer from './features/tournamentsSlice';
import metaReducer from './features/metaSlice';
import teamFindersReducer from './features/teamFindersSlice';
import updatesReducer from './features/updatesSlice';
import csUpdatesReducer from './features/csUpdatesSlice';
import csKinsReducer from './features/csKinsSlice';
import csTeamFinderReducer from './features/csTeamFinderSlice';
import csTournamentsReducer from './features/csTournamentsSlice';

const store = configureStore({
  reducer: {
    builds: buildsReducer,
    customs: customsReducer,
    bugs: bugsReducer,
    skins: skinsReducer, 
    tournaments: tournamentsReducer,
    meta: metaReducer,
    teamFinders: teamFindersReducer,
    updates: updatesReducer ,
    csBugs: csBugsReducer,
    throws: throwsReducer, 
    workshop: workshopReducer, 
    antiCheat: antiCheatReducer,
    csUpdates: csUpdatesReducer,
    csKins: csKinsReducer,
    csTeamFinder: csTeamFinderReducer,
    csTournaments: csTournamentsReducer,
  },
});

export default store;