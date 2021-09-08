import { Nav, Banner, Row } from "components";
import "./HomeScreen.css";
import requests, { baseURL } from "Requests";

const HomeScreen = () => {
    return (
        <div className="home-screen">
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
        </div>
    );
}
 
export default HomeScreen;