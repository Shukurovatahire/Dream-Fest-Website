import { createSlice } from "@reduxjs/toolkit";

interface IuserInfo {
  name: string;
  password: number;
  email: string;
}
const initialState = {
  users: [],
};
const userInfoSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
