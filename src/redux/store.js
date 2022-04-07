import { configureStore } from '@reduxjs/toolkit'

import movieSlices from './movieSlice'

const store = configureStore({ reducer: { movies: movieSlices } })

export default store
