import React, { useState } from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const MusicPlayerBar = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };


  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        paddingTop: "7px !important"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={song.image}
          alt={song.name}
          style={{
            width: "4rem",
            height: "5rem",
            marginRight: "10px",
            borderRadius: "10px",
          }}
        />
        <div>
          <div
            style={{
              fontSize: "1rem",
              fontFamily: "sans-serif",
              fontStyle: "italic",
            }}
          >
            {song.title}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              fontFamily: "sans-serif",
              fontStyle: "italic",
            }}
          >
            {song.artists[0]}
          </div>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <Box>
          <div
            onClick={togglePlay}
            style={{ cursor: "pointer", margin: "0.5rem" }}
          >
            {isPlaying ? (
              <PauseCircleOutlineOutlinedIcon />
            ) : (
              <PlayCircleFilledWhiteOutlinedIcon />
            )}
          </div>
        </Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
          <span sx={{}}>{formatTime(song.durationInMs - 0.7*(song.durationInMs))}</span>
          <Box sx={{ width: "80%" }}>
            <LinearProgress
              variant="determinate"
              value="30"
              sx={{
                backgroundColor: "#FFFFFF",
                height: "5px",
                borderRadius: "10px",
                color: "#34C94B",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#34B94C",
                },
              }}
            />
          </Box>
          <span>{formatTime(song.durationInMs)}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPlayerBar;
