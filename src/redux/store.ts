import { configureStore } from '@reduxjs/toolkit'
import { librayApi } from './api/libraryApi'
// Assuming you have a bookSlice defined

export const store = configureStore({
  reducer: {
    [librayApi.reducerPath] : librayApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(librayApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch