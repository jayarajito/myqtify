import React from 'react';
import rightArrowImage from '../assets/rightarrow.png';
import styles from "../modules/Button.module.css";

const RightNavigationButton = ({ onClick, disabled  }) => {
  return (
    <img
      src={rightArrowImage}
      alt="Right Arrow"
      onClick={onClick}
      style={{ cursor: 'pointer', width: "30px", height: "30px" }}
      className={disabled ? styles.disabled : styles.enabled}
    />
  );
};

export default RightNavigationButton;
