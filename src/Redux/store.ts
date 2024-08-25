import { configureStore, Store } from "@reduxjs/toolkit";
import concertSlice from "./concertSlice";
import { concertApi } from "../Services/ConcertApi/concertApi";
import cartReducer from "./cartSlice";

export const store:Store = configureStore({
  reducer: {
    concerts: concertSlice,
    cart:cartReducer,
    [concertApi.reducerPath]: concertApi.reducer,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(concertApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
