import { configureStore } from '@reduxjs/toolkit'
import { librayApi } from './api/libraryApi'
import bookReducer from './features/books/bookSlice' // Assuming you have a bookSlice defined

export const store = configureStore({
  reducer: {
    [librayApi.reducerPath] : librayApi.reducer,
    book: bookReducer, // Assuming you have a bookReducer defined
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(librayApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch