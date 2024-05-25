import React from "react";
import styles from "../modules/FloatingAlbumList.module.css";
import FloatingAlbumCard from "./FloatingAlbumCard";

const FloatingAlbumList = ({ albumList }) => {
  return (
    <div className={styles.floatingAlbumList}>
      <div className={styles.AlbumListContainer}>
        <ul className={styles.AlbumList}>
          {albumList.length === 0 ? (
            <p style={{textAlign:"center", color:"white", fontSize:"1rem", fontWeight:"bold", fontStyle:"italic"}}>No albums found</p>
          ) : (
            albumList.map((album) => (
              <FloatingAlbumCard key={album.id} album={album} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default FloatingAlbumList;
