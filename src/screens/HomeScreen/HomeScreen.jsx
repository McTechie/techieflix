import { useState, lazy, Suspense } from 'react'
import requests, { baseURL } from 'Requests'
import axios from 'axios'
import alertify from 'alertifyjs'
import './HomeScreen.css'

const Nav = lazy(() => import('components/Nav/Nav'))
const Banner = lazy(() => import('components/Banner/Banner'))
const Row = lazy(() => import('components/Row/Row'))
const Footer = lazy(() => import('components/Footer/Footer'))
const Trailer = lazy(() => import('components/Trailer/Trailer'))

const HomeScreen = () => {
  const [trailerUrl, setTrailerUrl] = useState('')
  const [trailerTitle, setTrailerTitle] = useState('')
  const [showTrailer, setShowTrailer] = useState(false)

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
      alertify.alert('Ohh no...', 'Looks like we can\'t find a trailer for your choice!', () => { })
    }
  }

  const handleTrailerClose = () => {
    setShowTrailer(false)
    setTrailerUrl('')
    setTrailerTitle('')
  }

  return (
    <div className="home-screen">
      {showTrailer && <Suspense fallback={<p>Loading...</p>}>
        <Trailer trailerTitle={trailerTitle} trailerUrl={trailerUrl} handleTrailerClose={handleTrailerClose} />
      </Suspense>}
      <Suspense fallback={<p>Loading...</p>}>
        <Nav />

        <Banner fetchTrailer={fetchTrailer} />

        <Row fetchTrailer={fetchTrailer} title="TECHIEFLIX ORIGINALS" fetchUrl={baseURL + requests.fetchNetflixOriginals} isLargeRow />
        <Row fetchTrailer={fetchTrailer} title="TRENDING NOW" fetchUrl={baseURL + requests.fetchTrending} isLargeRow />
        <Row fetchTrailer={fetchTrailer} title="ANIMATIONS" fetchUrl={baseURL + requests.fetchAnimations} isLargeRow />
        <Row fetchTrailer={fetchTrailer} title="SCI-FI" fetchUrl={baseURL + requests.fetchSciFiMovies} isLargeRow />
        <Row fetchTrailer={fetchTrailer} title="ACTION" fetchUrl={baseURL + requests.fetchActionMovies} />
        <Row fetchTrailer={fetchTrailer} title="COMEDY" fetchUrl={baseURL + requests.fetchComedyMovies} />
        <Row fetchTrailer={fetchTrailer} title="ROMANCE" fetchUrl={baseURL + requests.fetchRomanceMovies} />
        <Row fetchTrailer={fetchTrailer} title="FICTION" fetchUrl={baseURL + requests.fetchFictionMovies} />
        <Row fetchTrailer={fetchTrailer} title="HORROR" fetchUrl={baseURL + requests.fetchHorrorMovies} />
        <Row fetchTrailer={fetchTrailer} title="DOCUMENTARIES" fetchUrl={baseURL + requests.fetchDocumentaries} />

        <Footer />
      </Suspense>
    </div>
  )
}

export default HomeScreen
