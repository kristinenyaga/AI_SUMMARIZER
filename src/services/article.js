import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapid_api_key = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  // The reducerPath is a unique key that your service will be mounted to in your store. If you call createApi more than once in your application, you will need to provide a unique value each time. Defaults to 'api'.
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapid_api_key);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=6`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// lazy-allow us to fire this request on demand
export const { useLazyGetSummaryQuery } = articleApi
