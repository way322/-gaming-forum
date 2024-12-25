// features/csKinsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const csKinsSlice = createSlice({
  name: 'csKins',
  initialState: {
    topics: [],
  },
  reducers: {
    addCsKinTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCsKinTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsKinTopic, updateCsKinTopic } = csKinsSlice.actions;
export default csKinsSlice.reducer;