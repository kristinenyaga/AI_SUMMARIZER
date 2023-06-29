import { configureStore,} from "@reduxjs/toolkit";
import { articleApi} from "./article";
 
// store-global state that stores the entire information of our application
export const store = configureStore({
  // A single reducer function that will be used as the root reducer, or an object of slice reducers that will be passed to combineReducers().
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});