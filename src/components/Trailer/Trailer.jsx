import './Trailer.css'

const Trailer = ({ trailerTitle, trailerUrl, setShowTrailer }) => {
  return (
    <div id="trailerModal" className="trailer-modal">
      <div className="trailer-modal-content">
        <div className="trailer-modal-header">
          <span className="trailer-modal-close" onClick={() => setShowTrailer(false)}>&times;</span>
          <h2>{trailerTitle}</h2>
        </div>
        <div className="trailer-modal-body">
          <iframe className="trailer-iframe" src={trailerUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Trailer
