// features/csUpdatesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const csUpdatesSlice = createSlice({
  name: 'csUpdates',
  initialState: {
    topics: [],
  },
  reducers: {
    addCsUpdateTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCsUpdateTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsUpdateTopic, updateCsUpdateTopic } = csUpdatesSlice.actions;
export default csUpdatesSlice.reducer;