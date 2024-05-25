import React from "react";
import logoImage from "../assets/logo.png";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FeedbackButton from "./FeedbackButton";
import styles from "../modules/Navbar.module.css";

const Navbar = ({onFeedbackButtonClick, totalAlbums, onFilter, onBlur}) => {
  return (
    <div className={styles.navbarToolbar}>
      <Logo src={logoImage} alt="QTify Logo" />
      <SearchBar totalAlbums={totalAlbums} onFilter={onFilter} onBlur={onBlur}/>
      <FeedbackButton text="Give Feedback" onFeedbackButtonClick={onFeedbackButtonClick}/>
    </div>
  );
};

export default Navbar;
