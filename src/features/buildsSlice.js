// features/buildsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const buildsSlice = createSlice({
  name: 'builds',
  initialState: {
    topics: [],
  },
  reducers: {
    addBuildTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateBuildTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addBuildTopic, updateBuildTopic } = buildsSlice.actions;
export default buildsSlice.reducer;