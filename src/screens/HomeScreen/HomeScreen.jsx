import { Nav, Banner, Row } from "components";
import "./HomeScreen.css";
import requests from "Requests";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Nav />
            
            <Banner />

            <Row title="TECHIEFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}
 
export default HomeScreen;