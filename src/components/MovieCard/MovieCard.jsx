import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './MovieCard.scss'
import Loading from '../Loading/Loading'

const MovieCard = (props) => {
  const { data } = props
  const { loading } = useSelector((state) => state.movies.loading)

  return (
    <div className='card-item'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to={`/movie/${data.imdbID}`}>
            <div className='card-inner'>
              <div className='card-top'>
                <img src={data.Poster} alt={data.Title} />
              </div>
              <div className='card-bottom'>
                <div className='card-info'>
                  <h4>{data.Title}</h4>
                  <p>{data.Year}</p>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  )
}

export default MovieCard
