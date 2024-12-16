// features/customsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const customsSlice = createSlice({
  name: 'customs',
  initialState: {
    topics: [],
  },
  reducers: {
    addCustomTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateCustomTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCustomTopic, updateCustomTopic } = customsSlice.actions;
export default customsSlice.reducer;