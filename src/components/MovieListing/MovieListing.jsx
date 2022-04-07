import { useSelector } from 'react-redux'
import Slider from 'react-slick'

import MovieCard from '../MovieCard/MovieCard'
import { settings } from '../../common/Settings'
import './MovieListing.scss'

const MovieListing = () => {
  const { movies, shows } = useSelector((state) => state.movies)

  let renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (
      <div className='movies-error'>
        <h3>{movies.error} </h3>
      </div>
    )

  let renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (
      <div className='movies-error'>
        <h3>{shows.error} </h3>
      </div>
    )

  return (
    <div className='movie-wrapper'>
      <div className='lists'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='lists'>
        <h2>Shows</h2>
        <Slider {...settings}>{renderShows}</Slider>
      </div>
    </div>
  )
}

export default MovieListing
