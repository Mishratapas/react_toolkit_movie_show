import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import MovieApi from '../common/Api/MovieApi'
import { MovieApiKey } from '../common/Api/MovieApiKey'

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (values) => {
    // const MovieText = 'Harry Potter'
    const response = await MovieApi.get(
      `?apikey=${MovieApiKey}&s=${values}&type=movie`
    )
    return response.data
  }
)

export const getShows = createAsyncThunk('shows/getShows', async (values) => {
  // const showText = 'Office'
  const response = await MovieApi.get(
    `?apikey=${MovieApiKey}&s=${values}&type=series`
  )
  return response.data
})

export const getDetail = createAsyncThunk('detail/getDetail', async (id) => {
  const response = await MovieApi.get(
    `?apikey=${MovieApiKey}&i=${id}&Plot=full`
  )
  return response.data
})

const initialState = { movies: {}, shows: {}, detail: {}, loading: false }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeThings: (state) => {
      state.detail = {}
    },
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.loading = true
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false
      console.log('Movies are fetched')
      state.movies = action.payload
    },
    [getShows.pending]: (state, action) => {
      state.loading = true
    },
    [getShows.fulfilled]: (state, action) => {
      state.loading = false
      console.log(`Shows are fetched`)
      state.shows = action.payload
    },
    [getDetail.pending]: (state, action) => {
      state.loading = true
    },
    [getDetail.fulfilled]: (state, action) => {
      state.loading = false
      console.log(`details are fetched`)
      state.detail = action.payload
    },
  },
})
export const { removeThings } = movieSlice.actions
export default movieSlice.reducer
