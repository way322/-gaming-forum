// features/metaSlice.js
import { createSlice } from '@reduxjs/toolkit';

const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    topics: [],
  },
  reducers: {
    addMetaTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateMetaTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addMetaTopic, updateMetaTopic } = metaSlice.actions;
export default metaSlice.reducer;