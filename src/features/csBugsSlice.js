// features/csBugsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const csBugsSlice = createSlice({
  name: 'csBugs',
  initialState: {
    topics: [],
  },
  reducers: {
    addCsBugsTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCsBugsTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsBugsTopic, updateCsBugsTopic } = csBugsSlice.actions;
export default csBugsSlice.reducer;