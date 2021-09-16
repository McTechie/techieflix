import { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [highlightFooter, setHighlightFooter] = useState(false)

  return (
    <footer>
      <div
        className="footer-container"
        onMouseEnter={() => setHighlightFooter(true)}
        onMouseLeave={() => setHighlightFooter(false)}
      >
        <div className="footer-copyright">
          &copy; <span className={`${highlightFooter && 'footer-highlight'}`}>Techieflix</span> 2021
        </div>
        <div className="footer-tagline">
          const madeWith = ( <i className={`${highlightFooter && 'footer-highlight'} fas fa-heartbeat`} /> , <i className={`${highlightFooter && 'footer-highlight'} fab fa-google`} /> , <i className={`${highlightFooter && 'footer-highlight'} fas fa-mug-hot`} /> )=&gt; &#123; A <span className={`footer-tagline-creator ${highlightFooter && 'footer-highlight'}`}>McTechie</span> Creation &#125;
        </div>
        <div className="footer-tagline-sm">
          Made with &nbsp;<i className={`${highlightFooter && 'footer-highlight'} fas fa-heartbeat`} /> , <i className={`${highlightFooter && 'footer-highlight'} fab fa-google`} /> &amp; <i className={`${highlightFooter && 'footer-highlight'} fas fa-mug-hot`} /> &nbsp; by <span className={`footer-tagline-creator ${highlightFooter && 'footer-highlight'}`}>McTechie</span>
        </div>
        <div className="footer-sponsor">
          Powered by
          <span className={`footer-highlight-svg ${highlightFooter && 'footer-highlight'}`}>
            <svg width="40" height="40">
              <image
                xlinkHref="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                width="40"
                height="40"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
