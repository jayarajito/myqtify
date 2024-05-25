import React from "react";
import styles from "../modules/Logo.module.css";

const Logo = ({ src, alt }) => {
  return (
      <img src={src} alt={alt} className={styles.logoImage}/>
  );
};

export default Logo;
