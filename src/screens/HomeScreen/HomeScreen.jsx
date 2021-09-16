import { lazy, Suspense } from 'react'
import './HomeScreen.css'
import requests, { baseURL } from 'Requests'

const Nav = lazy(() => import('components/Nav/Nav'))
const Banner = lazy(() => import('components/Banner/Banner'))
const Row = lazy(() => import('components/Row/Row'))
const Footer = lazy(() => import('components/Footer/Footer'))

const HomeScreen = () => {
  return (
        <div className="home-screen">
            <Suspense fallback={<p>Loading...</p>}>
              <Nav />

              <Banner />

              <Row title="TECHIEFLIX ORIGINALS" fetchUrl={baseURL + requests.fetchNetflixOriginals} isLargeRow />
              <Row title="TRENDING NOW" fetchUrl={baseURL + requests.fetchTrending} isLargeRow />
              <Row title="ANIMATIONS" fetchUrl={baseURL + requests.fetchAnimations} isLargeRow />
              <Row title="SCI-FI" fetchUrl={baseURL + requests.fetchSciFiMovies} isLargeRow />
              <Row title="ACTION" fetchUrl={baseURL + requests.fetchActionMovies} />
              <Row title="COMEDY" fetchUrl={baseURL + requests.fetchComedyMovies} />
              <Row title="ROMANCE" fetchUrl={baseURL + requests.fetchRomanceMovies} />
              <Row title="FICTION" fetchUrl={baseURL + requests.fetchFictionMovies} />
              <Row title="HORROR" fetchUrl={baseURL + requests.fetchHorrorMovies} />
              <Row title="DOCUMENTARIES" fetchUrl={baseURL + requests.fetchDocumentaries} />

              <Footer />
            </Suspense>
        </div>
  )
}

export default HomeScreen
