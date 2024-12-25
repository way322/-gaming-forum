// features/throwsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const throwsSlice = createSlice({
  name: 'throws',
  initialState: {
    topics: [],
  },
  reducers: {
    addThrowTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateThrowTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addThrowTopic, updateThrowTopic } = throwsSlice.actions;
export default throwsSlice.reducer;