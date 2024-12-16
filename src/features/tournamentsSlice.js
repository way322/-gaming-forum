// features/tournamentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tournamentsSlice = createSlice({
  name: 'tournaments',
  initialState: {
    topics: [],
  },
  reducers: {
    addTournamentTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateTournamentTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addTournamentTopic, updateTournamentTopic } = tournamentsSlice.actions;
export default tournamentsSlice.reducer;