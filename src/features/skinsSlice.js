// features/skinsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const skinsSlice = createSlice({
  name: 'skins',
  initialState: {
    topics: [],
  },
  reducers: {
    addSkinsTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    updateSkinsTopic: (state, action) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic, idx) => idx === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addSkinsTopic, updateSkinsTopic } = skinsSlice.actions;
export default skinsSlice.reducer;