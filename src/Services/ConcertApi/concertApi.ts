import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = "6546f2c2damsh0690a83566e7883p1022d7jsn0121ad1741c0";

// API Slice 
export const concertApi = createApi({
  reducerPath: "concertApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://concerts-artists-events-tracker.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", rapidApiKey);
      headers.set(
        "x-rapidapi-host",
        "concerts-artists-events-tracker.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getConcerts: builder.query({
      query: (name: string) => `venue?name=${encodeURIComponent(name)}`,
    }),
  }),
});

export const { useGetConcertsQuery }: any = concertApi;
