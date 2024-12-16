// features/teamFindersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const teamFindersSlice = createSlice({
  name: 'teamFinders',
  initialState: {
    topics: [],
  },
  reducers: {
    addTeamFinderTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateTeamFinderTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addTeamFinderTopic, updateTeamFinderTopic } = teamFindersSlice.actions;
export default teamFindersSlice.reducer;