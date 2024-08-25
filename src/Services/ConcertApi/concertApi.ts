import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const concertApi = createApi({
//   reducerPath: "concertApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://concerts-artists-events-tracker.p.rapidapi.com",
//   }),
//   endpoints: (builder) => ({
//     getConcerts: builder.query({
//       query: () => "",
//     }),
//   }),
// });

// export const { useGetConcertsQuery }: any = concertApi;
const rapidApiKey = "e46a248c11msh84f97c00228596cp116e51jsn4e421bbe7241";

// API Slice oluşturma
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
