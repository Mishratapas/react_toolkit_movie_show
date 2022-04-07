import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { MovieListing } from '../../components'
import { getMovies, getShows } from '../../redux/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  const movieText = 'Mission'
  const showText = 'Office'

  useEffect(() => {
    dispatch(getMovies(movieText))
    dispatch(getShows(showText))
  }, [dispatch])

  return (
    <div className='banner-image'>
      <MovieListing />
    </div>
  )
}

export default Home
