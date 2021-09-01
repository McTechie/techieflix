import { Nav } from "..";
import { Banner } from "..";
import "./HomeScreen.css";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Nav />
            <Banner />
        </div>
    );
}
 
export default HomeScreen;