import React from "react";
import { Typography } from "@mui/material";
import headphoneImage from "../assets/hero_headphones.png";
import styles from "../modules/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className="">
        <Typography variant="h4" className={styles.text}>100 Thousand Songs, ad-free</Typography>
        <Typography variant="h4" className={styles.text}>Over thousands podcast episodes</Typography>
      </div>
      <img src={headphoneImage} alt="Headphones" className={styles.headphoneImage}/>
    </div>
  );
};

export default HeroSection;
