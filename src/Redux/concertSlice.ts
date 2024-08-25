import { createSlice } from "@reduxjs/toolkit";
import { concertApi } from "../Services/ConcertApi/concertApi";
const initialState = {
  concertData: [],
};

const concertSlice = createSlice({
  name: "concerts",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addMatcher(
    concertApi.endpoints.getConcerts.matchFulfilled,
    (state:any,{payload}:any)=>{
        state.concerts=payload
    }
)}
});
export default concertSlice.reducer;
