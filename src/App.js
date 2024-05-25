import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/SectionCard";
import {
  FAQ_API,
  GENRES_API,
  NEW_ALBUMS_API,
  SONGS_API,
  TOP_ALBUMS_API,
} from "./apis/api";
import { Box } from "@mui/material";
import FaqAccordion from "./components/FaqAccordion";
import MusicPlayerBar from "./components/MusicPlayerBar";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";
import FloatingAlbumList from "./components/FloatingAlbumList";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [faqsAcc, setFaqsAcc] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [mergedAlbums, setMergedAlbums] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== prevScrollY) {
        setShowResults(false);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (filteredData) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [filteredData]);

  useEffect(()=>{
    if(initialized){
      setShowResults(false);
    }
  },[initialized]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          topAlbumsResponse,
          newAlbumsResponse,
          allSongsResponse,
          genresResponse,
          faqsResponse,
        ] = await Promise.all([
          axios.get(TOP_ALBUMS_API),
          axios.get(NEW_ALBUMS_API),
          axios.get(SONGS_API),
          axios.get(GENRES_API),
          axios.get(FAQ_API),
        ]);

        setTopAlbums(topAlbumsResponse.data);
        setNewAlbums(newAlbumsResponse.data);
        setAllSongs(allSongsResponse.data);
        setGenres(genresResponse.data.data);
        setFaqsAcc(faqsResponse.data.data);
        setInitialized(true);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const merged = [...topAlbums, ...newAlbums];
    setMergedAlbums(merged);
  }, [topAlbums, newAlbums]);

  const handleCardClick = (song) => {
    setSelectedSong(song);
  };

  const handleFeedbackButtonClick = () => {
    setShowFeedbackForm(true);
  };

  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false);
  };

  const handleFilter = (filterData) => {
    setFilteredData(filterData);
  };

  const handleBlur = () => {
    setShowResults(false);
  };

  return (
    <div>
      {showFeedbackForm && <div className="overlay" />}
      <div>
        <Navbar
          onFeedbackButtonClick={handleFeedbackButtonClick}
          totalAlbums={mergedAlbums}
          onFilter={handleFilter}
          onBlur={handleBlur}
        />
        {initialized && (prevScrollY === 0 ) && showResults && <FloatingAlbumList albumList={filteredData}/>}
        <HeroSection />
        <div>
          <Section title="Top Albums" albums={topAlbums} />
          <div></div>
          <Section title="New Albums" albums={newAlbums} />
          <div></div>
          <Box
            sx={{
              borderTop: "2px solid #34C94B",
              borderBottom: "2px solid #34C94B",
            }}
          >
            <Section
              title="Songs"
              songs={allSongs}
              genres={genres}
              onClick={handleCardClick}
            />
          </Box>
        </div>
        <FaqAccordion faqs={faqsAcc} />
        {selectedSong && (
          <React.Fragment>
            <hr style={{ border: "2px solid #3b3b3b", margin: "0px" }} />
            <MusicPlayerBar song={selectedSong} />
          </React.Fragment>
        )}
      </div>
      <div className={showFeedbackForm ? "feedback-form-open" : ""}>
        {showFeedbackForm && <FeedbackForm onClose={handleCloseFeedbackForm} />}
      </div>
    </div>
  );
};

export default App;
