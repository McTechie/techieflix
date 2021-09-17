/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'alertifyjs/build/css/alertify.css'
import './Row.css'

const Row = ({ fetchTrailer, title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  const baseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl)
      const data = res.data.results
      setMovies(data)
      return res // Good Practice
    }

    fetchMovies()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-overlay">
        <div className="row-posters">
          {movies.map((movie) => (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row-poster ${isLargeRow && 'row-large'}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name ? movie.name : movie.title}
                key={movie.id}
                onClick={() => fetchTrailer(movie.id, movie.name ? movie.name : movie.title)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
