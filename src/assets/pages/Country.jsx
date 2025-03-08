import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Skeleton, Autocomplete, TextField, Grid } from "@mui/material";

// Function to shuffle the array (randomize the countries order)
const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Country = () => {
  const [countries, setCountries] = useState([]); // All countries (including shuffled)
  const [displayedCountries, setDisplayedCountries] = useState([]); // Countries to display (after filtering, shuffling, or sorting)
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("none"); // "asc", "desc", or "none" (for random)
  const [searchQuery, setSearchQuery] = useState(""); // For search query
  const navigate = useNavigate();

  // Fetch countries only once when component mounts
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const shuffledCountries = shuffleArray(response.data); // Shuffle countries initially
        setCountries(shuffledCountries); // Set shuffled countries
        setDisplayedCountries(shuffledCountries); // Initially show shuffled countries
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Apply sorting when sortOrder changes (without causing infinite re-renders)
  useEffect(() => {
    if (!loading && countries.length > 0) {
      let sortedCountries;
      if (sortOrder === "asc") {
        sortedCountries = [...countries].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      } else if (sortOrder === "desc") {
        sortedCountries = [...countries].sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
      } else {
        sortedCountries = shuffleArray(countries); // If none (initial random state)
      }
      setDisplayedCountries(sortedCountries); // Set the sorted or shuffled countries to be displayed
    }
  }, [sortOrder, countries, loading]); // Run when sortOrder or countries change

  // Handle filtering based on search query
  const handleSearch = (event, newInputValue) => {
    setSearchQuery(newInputValue);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(newInputValue.toLowerCase())
    );
    setDisplayedCountries(filtered); // Filter the countries
  };

  // Handle search button click
  const handleSearchButtonClick = () => {
    const foundCountry = countries.find((country) =>
      country.name.common.toLowerCase() === searchQuery.toLowerCase()
    );
    if (foundCountry) {
      // Navigate to the country details page
      navigate(`/country/${foundCountry.name.common}`);
    }
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (event, value) => {
    if (value) {
      const foundCountry = countries.find(
        (country) => country.name.common.toLowerCase() === value.toLowerCase()
      );
      if (foundCountry) {
        navigate(`/country/${foundCountry.name.common}`);
      }
    }
  };

  // Handle "Enter" key press for searching
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchButtonClick(); // Trigger search button click when "Enter" is pressed
    }
  };

  return (
    <Box style={{ backgroundColor: "black", padding: "20px", color: "#fff", textAlign: "center" }}>
      <Typography variant="h4" style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#ff7eb3" }}>
        Explore Countries 🌍
      </Typography>

      {/* Search Container with Input and Button */}
      <Grid container spacing={2} justifyContent="center" alignItems="center"  >
        <Grid item xs={8} sm={9}>
          <Autocomplete
            value={searchQuery}
            onInputChange={handleSearch} // Filter countries based on search input
            onChange={handleSuggestionSelect} // Handle suggestion click
            options={countries.map((country) => country.name.common)} // List country names only
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for a country"
                variant="outlined"
                onKeyDown={handleKeyPress} // Add event listener for "Enter" key press
              />
            )}
            style={{
              marginBottom: "10px", // 10px margin as requested
              backgroundColor: "#fff",
              borderRadius: "5px",
              width: "100%",
              height: "100%", // Ensuring it takes the full height
            }}
          />
        </Grid>
        <Grid item xs={4} sm={3}  sx={{
          paddingLeft: "16px", // Left padding for the button
          paddingBottom: "16px", // Bottom padding for the button
        }} >
          <Button
            variant="contained"
            onClick={handleSearchButtonClick}
            style={{
              backgroundColor: "#ff7eb3",
              color: "#fff",
              width: "50%",
              height: "100%", // Make the button same height as the input field
              padding: "20px 20px",
              marginTop: "0px", // 10px margin to keep consistent spacing
              borderRadius: "20px",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Sorting Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <Button
          variant="contained"
          onClick={() => setSortOrder("asc")}
          style={{ marginRight: "10px", backgroundColor: "#ff7eb3", color: "#fff" }}
        >
          Sort A-Z
        </Button>
        <Button
          variant="contained"
          onClick={() => setSortOrder("desc")}
          style={{ backgroundColor: "#ff7eb3", color: "#fff" }}
        >
          Sort Z-A
        </Button>
      </div>

      {/* Display Country Information */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Box
                key={index}
                style={{
                  width: "320px",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                  textAlign: "left",
                  background: "linear-gradient(135deg, rgb(23, 20, 20), rgb(114, 43, 73))",
                  color: "#fff",
                  margin: "20px auto",
                }}
              >
                <Skeleton variant="rectangular" width="100%" height={150} style={{ borderRadius: "8px" }} />
                <Skeleton variant="text" width="60%" height={30} style={{ margin: "10px auto" }} />
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="70%" height={20} />
                <Skeleton variant="text" width="50%" height={20} />
                <Skeleton variant="rounded" width="120px" height={40} style={{ margin: "10px auto" }} />
              </Box>
            ))
          : displayedCountries.map((country, index) => (
              <div
                key={index}
                style={{
                  width: "320px",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                  textAlign: "left",
                  background: "linear-gradient(135deg, rgb(23, 20, 20), rgb(114, 43, 73))",
                  color: "#fff",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "20px auto",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Country Flag */}
                <img
                  src={country.flags?.png}
                  alt={`${country.name.common} Flag`}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h1 style={{ textAlign: "center" }}>{country.name.common}</h1>
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                <p><strong>Currency:</strong> {country.currencies ? Object.keys(country.currencies)[0] : "N/A"}</p>
                <p><strong>Region:</strong> {country.region}</p>

                {/* Read More Button - Navigates to Country Details Page */}
                <Button
                  variant="contained"
                  onClick={() => navigate(`/country/${country.name.common}`)}
                  style={{
                    display: "block",
                    margin: "10px auto",
                    backgroundColor: "#ff7eb3",
                    color: "#fff",
                  }}
                >
                  Read More
                </Button>
              </div>
            ))}
      </div>
    </Box>
  );
};

export default Country;
