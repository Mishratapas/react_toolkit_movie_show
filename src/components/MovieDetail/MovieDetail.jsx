import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import { GiCalendarHalfYear } from 'react-icons/gi'

import { getDetail, removeThings } from '../../redux/movieSlice'
import './MovieDetail.scss'
import Loading from '../Loading/Loading'

const MovieDetail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const { detail } = useSelector((state) => state.movies)
  const { loading } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getDetail(imdbID))
    return () => {
      dispatch(removeThings())
    }
  }, [dispatch, imdbID])

  return (
    <div className='movie-section'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='section-left'>
            <div className='movie-title'>{detail.Title}</div>
            <div className='movie-rating'>
              <span>
                IMDB rating: {detail.imdbRating}{' '}
                <FaStar style={{ color: 'yellow' }} />
              </span>
              <br />
              <span>
                Released <GiCalendarHalfYear />: {detail.Released}
              </span>
              <br />
              <span>Box Office : {detail.BoxOffice}</span>
              <br />
              <span>
                Runtime <BiCameraMovie className='cinema' vs />:{' '}
                {detail.Runtime}
              </span>
              <br />
              <span>
                IMDB Votes : {detail.imdbVotes}{' '}
                <BsHandThumbsUpFill style={{ color: 'white' }} />
              </span>
            </div>
            <div className='movie-plot'>{detail.Plot}</div>
            <div className='movie-info'>
              <div>
                <span>Director : </span>
                <span>{detail.Director}</span>
              </div>
              <div>
                <span>Writer : </span>
                <span>{detail.Writer}</span>
              </div>
              <div>
                <span>Actors : </span>
                <span>{detail.Actors}</span>
              </div>
              <div>
                <span>Language : </span>
                <span>{detail.Language}</span>
              </div>
              <div>
                <span>Country : </span>
                <span>{detail.Country}</span>
              </div>
              <div>
                <span>Awards : </span>
                <span>{detail.Awards}</span>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <img src={detail.Poster} alt={detail.Title} />
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail
