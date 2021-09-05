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

    // Add other links as well

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav-contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav-logo"
                    // src="logo_full.png"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <img
                    onClick={() => history.push("/profile")}
                    className="nav-avatar"
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b78352c6e41eab45748dfb0bce99b46e4584267_full.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}
 
export default Nav;