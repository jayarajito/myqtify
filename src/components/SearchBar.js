import React from "react";
import { useState } from "react";

import { Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import styles from "../modules/SearchBar.module.css";

const SearchBar = ({ totalAlbums, onFilter, onBlur }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = totalAlbums.filter((album) =>
      album.title.trim().toLowerCase().includes(value.toLowerCase())
    );
    onFilter(filtered);
  };
  return (
    <Box className={styles.SearchBarBox}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.SearchInput}
        value={searchTerm}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={() => {
          window.scrollTo(0, 0);
        }}
      />
      <Button
        variant="text"
        startIcon={<SearchIcon sx={{ color: "#000000" }} />}
        className={styles.SearchButton}
      />
    </Box>
  );
};

export default SearchBar;
