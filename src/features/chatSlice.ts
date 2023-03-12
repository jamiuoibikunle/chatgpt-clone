import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    handleNewInput: (state: RootState, action) => {
      state.chats = [...state.chats, action.payload];
    },
  },
});

export const { handleNewInput } = chatSlice.actions;

export default chatSlice.reducer;
