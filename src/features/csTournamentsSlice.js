// features/csTournamentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const csTournamentsSlice = createSlice({
  name: 'csTournaments',
  initialState: {
    topics: [],
  },
  reducers: {
    addCsTournamentTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCsTournamentTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsTournamentTopic, updateCsTournamentTopic } = csTournamentsSlice.actions;
export default csTournamentsSlice.reducer;