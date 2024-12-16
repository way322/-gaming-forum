// features/updatesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const updatesSlice = createSlice({
  name: 'updates',
  initialState: {
    topics: [],
  },
  reducers: {
    addUpdatesTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateUpdatesTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addUpdatesTopic, updateUpdatesTopic } = updatesSlice.actions;
export default updatesSlice.reducer;