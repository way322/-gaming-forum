// features/csTeamFinderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const csTeamFinderSlice = createSlice({
  name: 'csTeamFinder',
  initialState: {
    topics: [],
  },
  reducers: {
    addCsTeamFinderTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCsTeamFinderTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsTeamFinderTopic, updateCsTeamFinderTopic } = csTeamFinderSlice.actions;
export default csTeamFinderSlice.reducer;