import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countriesnow.space/api/v0.1/",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "countries/population",
    }),
    getStates: builder.query({
      query: (country) => ({
        url: "countries/states",
        method: "POST",
        body: { country },
      }),
    }),
    getCities: builder.query({
      query: ({ country, state }) => ({
        url: "countries/state/cities",
        method: "POST",
        body: { country, state },
      }),
    }),
    getCountryInfo: builder.query({
      query: (country) => ({
        url: "countries/info",
        params: { returns: "currency,flag,unicodeFlag,dialCode" },
      }),
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useGetCountryInfoQuery,
} = api;
