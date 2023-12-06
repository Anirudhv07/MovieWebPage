import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import './App.css'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie_details/:id' element={<MoviePage />} />

      

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
