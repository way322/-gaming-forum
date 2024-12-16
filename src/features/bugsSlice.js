// features/bugsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bugsSlice = createSlice({
  name: 'bugs',
  initialState: {
    topics: [],
  },
  reducers: {
    addBugsTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateBugsTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addBugsTopic, updateBugsTopic } = bugsSlice.actions;
export default bugsSlice.reducer;