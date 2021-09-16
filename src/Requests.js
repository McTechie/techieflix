const baseURL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  fetchAnimations: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=16`,
  fetchFictionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=14`,
  fetchSciFiMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=878`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`
}

export { baseURL }

export default requests

// Trailer: https://www.themoviedb.org/talk/5451ec02c3a3680245005e3c
