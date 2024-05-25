import React from "react";
import leftArrowImage from "../assets/leftarrow.png";
import styles from "../modules/Button.module.css";

const LeftNavigationButton = ({ onClick, disabled }) => {
  return (
    <img
      src={leftArrowImage}
      alt="Left Arrow"
      onClick={onClick}
      style={{ cursor: 'pointer', width: "30px", height: "30px" }}
      className={disabled ? styles.disabled : styles.enabled}
    />
  );
};

export default LeftNavigationButton;