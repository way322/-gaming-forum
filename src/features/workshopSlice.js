// features/workshopSlice.js
import { createSlice } from '@reduxjs/toolkit';

const workshopSlice = createSlice({
  name: 'workshop',
  initialState: {
    topics: [],
  },
  reducers: {
    addWorkshopTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateWorkshopTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addWorkshopTopic, updateWorkshopTopic } = workshopSlice.actions;
export default workshopSlice.reducer;