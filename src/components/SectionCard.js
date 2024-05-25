import { Grid, Button, Typography, Box, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import React, { useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import styles from "../modules/SectionCard.module.css";

const Section = ({ title, albums, songs, genres, onClick }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const handleChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const filterSongs = (genre) => {
    if (genre === "All") {
      return songs;
    } else {
      return songs.filter((song) => song.genre.key === genre);
    }
  };

  const toggleDisplay = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeaders}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
          {title}
        </Typography>
        {title !== "Songs" && (
          <Button
            variant="text"
            onClick={toggleDisplay}
            sx={{ fontWeight: "bold", color: "#34C94B" }}
          >
            {showAll ? "Collapse" : "Show All"}
          </Button>
        )}
      </div>
      {title !== "Songs" && showAll ? (
        <Grid container spacing={1}>
          {albums.map((album) => (
            <Grid item key={album.id}>
              <Card album={album} numSongs={album.songs.length} />
            </Grid>
          ))}
        </Grid>
      ) : (
        title !== "Songs" && <Carousel cards={albums} />
      )}
      {title === "Songs" && (
        <TabContext value={activeTab}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="Genre tabs"
              indicatorColor="#34C94B"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "capitalize",
                },
                "& .Mui-selected": {
                  borderBottom: "4px solid green",
                  color:"#FFFFFF !important",
                },
              }}
            >
              <Tab
                label="All"
                value="All"
                sx={{ fontWeight: "bold", color: "#FFFFFF", fontSize: "16px" }}
              />
              {genres.map((genre) => (
                <Tab
                  label={genre.label}
                  value={genre.key}
                  sx={{
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "16px",
                  }}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value="All" sx={{ padding: "0px", paddingTop: "10px" }}>
            <Carousel cards={filterSongs("All")} isSongSection="Songs" onClick={onClick}/>
          </TabPanel>
          {genres.map((genre) => (
            <TabPanel
              value={genre.key}
              sx={{ padding: "0px", paddingTop: "10px" }}
            >
              <Carousel cards={filterSongs(genre.key)} isSongSection="Songs" onClick={onClick}/>
            </TabPanel>
          ))}
        </TabContext>
      )}
    </div>
  );
};

export default Section;
