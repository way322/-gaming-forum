// features/antiCheatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const antiCheatSlice = createSlice({
  name: 'antiCheat',
  initialState: {
    topics: [],
  },
  reducers: {
    addAntiCheatTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateAntiCheatTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addAntiCheatTopic, updateAntiCheatTopic } = antiCheatSlice.actions;
export default antiCheatSlice.reducer;