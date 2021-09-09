import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

const Nav = () => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => {
            window.removeEventListener("scroll", transitionNavbar);
        }
    }, []);

    return (
        <nav className={`nav ${show && "nav-black"}`}>
            <div className="nav-contents">
                <div className="nav-links-container">
                    <img
                        onClick={() => history.push("/")}
                        className="nav-logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="Techieflix Logo"
                    />
                    <div className="nav-links">
                        <button>Home</button>
                        <button>TV Series</button>
                        <button>Anime</button>
                        <button>Popular</button>
                        <button>My List</button>
                    </div>
                </div>
                <img
                    onClick={() => history.push("/profile")}
                    className="nav-avatar"
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b78352c6e41eab45748dfb0bce99b46e4584267_full.jpg"
                    alt="User Avatar"
                />
            </div>
        </nav>
    );
}
 
export default Nav;