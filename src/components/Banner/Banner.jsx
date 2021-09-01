import "./Banner.css";

const Banner = () => {
    const someText = "Test DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest Description"

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://lanetaneta.com/wp-content/uploads/2021/06/Los-programas-y-peliculas-mas-importantes-de-Netflix-en-2021.jpg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">Movie Name</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-desc">
                    {someText?.length > 150 ? someText.substr(0, 149) + "..." : someText}
                </h1>
            </div>

            <div className="banner-fade-bottom" />
        </header>
    );
}

export default Banner;