import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './passwordSlice'

export const store = configureStore({
  reducer: {
    passwords: passwordReducer,
  },
})