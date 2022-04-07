import { Routes, Route } from 'react-router-dom'

import { Header, Footer, Home, MovieDetail, PageNotFound } from './components'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/movie/:imdbID' element={<MovieDetail />} />
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
