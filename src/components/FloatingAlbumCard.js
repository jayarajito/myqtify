import React from "react";
import styles from "../modules/FloatingAlbumCard.module.css";

const FloatingAlbumCard = ({ album }) => {
  return (
    <div className={styles.FloatingAlbumCard}>
      <div className={styles.AlbumImageArtist}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.AlbumImage}
          width="50rem"
          height="60rem"
        />
        <div className={styles.AlbumTitleArtist}>
          <span className={styles.AlbumTitle}>{album.title}</span>
          <span className={styles.AlbumArtist}>{album.follows}</span>
        </div>
      </div>
      <div>
        <span
          className={styles.AlbumFollows}
        >{`${album.follows} Follows`}</span>
      </div>
    </div>
  );
};

export default FloatingAlbumCard;
