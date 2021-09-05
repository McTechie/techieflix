import { Nav, Banner, Row } from "components";
import "./HomeScreen.css";
import requests, { baseURL } from "Requests";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Nav />
            
            <Banner />

            <Row title="TECHIEFLIX ORIGINALS" fetchUrl={baseURL + requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={baseURL + requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={baseURL + requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={baseURL + requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={baseURL + requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={baseURL + requests.fetchRomanceMovies} />
            <Row title="Horror Movies" fetchUrl={baseURL + requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={baseURL + requests.fetchDocumentaries} />
        </div>
    );
}
 
export default HomeScreen;