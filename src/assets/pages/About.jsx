import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Skeleton } from "@mui/material"; // Using Material UI Skeleton for loading effect

const About = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const sectionStyle = {
    backgroundColor: "black",
    padding: "20px 20px",
    color: "#fff",
    textAlign: "center",
    marginTop: "0px", // Positioned 10px below navbar
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ff7eb3", // Stylish color for the heading
  };

  const cardStyle = {
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
  };

  const hoverStyle = {
    transform: "scale(1.05)",
  };

  useEffect(() => {
    // Fetch country data from the API
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data); // Store the fetched countries in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false); // Set loading to false if an error occurs
      });
  }, []);

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Discover Different Countries 🌎</h1>
      <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
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
                {/* Skeleton Loader for Country Image */}
                <Skeleton variant="rectangular" width="100%" height={150} style={{ borderRadius: "8px" }} />
                {/* Skeleton Loader for Country Name */}
                <Skeleton variant="text" width="60%" height={30} style={{ margin: "10px auto" }} />
                {/* Skeleton Loader for Capital */}
                <Skeleton variant="text" width="80%" height={20} />
                {/* Skeleton Loader for Currency */}
                <Skeleton variant="text" width="70%" height={20} />
                {/* Skeleton Loader for Region */}
                <Skeleton variant="text" width="50%" height={20} />
                {/* Skeleton Loader for Button */}
                <Skeleton variant="rounded" width="120px" height={40} style={{ margin: "10px auto" }} />
              </Box>
            ))
          : countries.slice(0, 10).map((country, index) => ( // Slice the first 10 countries
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = hoverStyle.transform)}
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
                <h1 style={{ textAlign: "center" }}>{country.name?.common}</h1>
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                <p><strong>Currency:</strong> {country.currencies ? Object.keys(country.currencies)[0] : "N/A"}</p>
                <p><strong>Region:</strong> {country.region}</p>
              </div>
            ))}
      </Box>
    </div>
  );
};

export default About;
