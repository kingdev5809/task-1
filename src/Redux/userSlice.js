import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  user: [
    {
      email: "kingdev@gmail.com",
      password: "65465165",
      name: "king ",
      gender: "famale",
      brith: "2023-04-02",
      id: 1,
    },
  ],
  updatedUser: {
    email: "",
    password: "",
    name: " ",
    gender: "",
    brith: "",
    id: null,
  },
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userCreated: (state, action) => {
      state.user.push(action.payload);
    },
    userDeleted: (state, action) => {
      state.user = state.user.filter((s) => s.id !== action.payload);
    },
    userUpdating: (state, action) => {
      state.updatedUser = action.payload;
    },
    userUpdated: (state, action) => {
      state.user[action.payload.idx] = action.payload.values;
    },
  },
});

const { actions, reducer } = usersSlice;

export default reducer;
export const { userCreated, userDeleted, userUpdated, userUpdating } = actions;
