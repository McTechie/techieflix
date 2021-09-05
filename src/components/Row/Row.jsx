import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res; // Good Practice
    }

    fetchData();
  }, [fetchUrl]);

  // Fade right of rows as well

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-overlay">
        <div className="row-posters">
          {movies.map(movie => (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row-poster ${isLargeRow && "row-large"}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                key={movie.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
 
export default Row;