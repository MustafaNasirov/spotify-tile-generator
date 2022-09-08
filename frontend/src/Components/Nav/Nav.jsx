import spotifyLogo from "../../assets/images/spotify-logo.png";

import "./Nav.scss";

const Nav = () => {

    return(
        <div className="nav-bar">
            <img src={spotifyLogo} alt="spotify logo" className="nav-logo"/>
            <h1 className="nav-bar__header">Spotify Logger and Tiles</h1>
        </div>
    )
};

export default Nav;