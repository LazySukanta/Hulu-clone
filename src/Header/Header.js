import React from "react";
import "./Header.css";
import hulu_white from "../images/hulu-white.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    // Bem Naming class
    <div className="header">
      <div className="header_icons">
        {/* All icons */}
        <div className="header_icon header_icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header_icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header_icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className="header_icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header_icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>

      <img src={hulu_white} alt="HULU" />
    </div>
  );
}

export default Header;
