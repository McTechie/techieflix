import { useState, useEffect } from 'react'
import requests, { baseURL } from 'Requests'
import axios from 'axios'
import './Banner.css'

const Banner = ({ fetchTrailer }) => {
  const [movie, setMovie] = useState([])

  const truncateOverview = (str, size) => str?.length > size ? str.substr(0, size - 1) + '...' : str

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(baseURL + requests.fetchNetflixOriginals)
      const bannerMovie = res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
      setMovie(bannerMovie)
      return res // Good Practice - Closing Promise Chain
    }

    fetchData()
  }, [])

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-btn" onClick={() => fetchTrailer(movie.id, movie.original_name)}>Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-desc">
          {truncateOverview(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner-fade-bottom" />
    </header>
  )
}

export default Banner
