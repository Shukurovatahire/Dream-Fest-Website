import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Concert } from "./cartSlice";
interface IUser {
  id: string;
  name: string;
  email: string;
  cart?: Concert[];
}

interface IUserState {
  currentUser: IUser | null;
  isAuthenticated: boolean;
}
const initialState: IUserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUser>) => {
      const storedCart = localStorage.getItem("currentUserCart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      state.isAuthenticated = true;

      state.currentUser = { ...action.payload, cart };
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...action.payload, cart })
      );
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
