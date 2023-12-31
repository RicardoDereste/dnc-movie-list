import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({ movieProp }) => {
  return (
    <div className='MovieCard'>
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={movieProp.title} />
      </div>
      <div className="movie-description">
        <h3>{movieProp.title}</h3>
        <Link to={`/movie/${movieProp.id}`} className='btn-details'>
          See Details
        </Link>
      </div>
    </div>
  )
}

export default MovieCard