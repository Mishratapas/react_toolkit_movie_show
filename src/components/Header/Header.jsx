import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'

import { getMovies, getShows } from '../../redux/movieSlice'
import './Header.scss'

const Header = () => {
  const [values, setValues] = useState('')
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    if (values === '') {
      window.alert('You have not entered anything!')
    } else {
      setValues('')
      dispatch(getMovies(values))
      dispatch(getShows(values))
    }
  }
  return (
    <div className='header'>
      <Link to='/' className='title'>
        react_toolkit_movie
      </Link>
      <div className='search-bar'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Search Movies or Shows'
            value={values}
            onChange={(e) => {
              setValues(e.target.value)
            }}
          />
          <button type='submit'>
            <BsSearch />
          </button>
        </form>
      </div>
      <div className='user-image'>
        <FaUserCircle className='img' />
      </div>
    </div>
  )
}

export default Header
