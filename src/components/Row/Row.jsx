/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [trailerTitle, setTrailerTitle] = useState('')
  const [showTrailer, setShowTrailer] = useState(false)

  const baseUrl = 'https://image.tmdb.org/t/p/original'

  const fetchTrailer = async (id, name) => {
    setTrailerTitle(name)
    let videos = await axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    if (videos.data.results.length === 0) {
      videos = await axios.get(`http://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    }
    const youtubeKey = videos.data.results.at(-1)?.key
    if (youtubeKey) {
      setTrailerUrl(`https://www.youtube.com/embed/${youtubeKey}`)
      setShowTrailer(true)
    } else {
      alertify.alert('Ohh no...', 'Looks like we can\'t find a trailer for your choice!', () => {})
    }
  }

  window.onclick = (event) => {
    if (event.target === document.getElementById('trailerModal')) {
      setShowTrailer(false)
    }
  }

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
    <>
      {showTrailer && (<div id="trailerModal" className="trailer-modal">
        <div className="trailer-modal-content">
          <div className="trailer-modal-header">
            <span className="trailer-modal-close" onClick={() => setShowTrailer(false)}>&times;</span>
            <h2>{trailerTitle}</h2>
          </div>
          <div className="trailer-modal-body">
            <iframe className="trailer-iframe" src={trailerUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>)}
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
    </>
  )
}

export default Row
