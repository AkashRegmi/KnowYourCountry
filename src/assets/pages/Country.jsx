import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Skeleton } from "@mui/material";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use for navigation

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log("Fetched Country Data:", response.data);
        setCountries(response.data.slice(0, 10)); // Limit data for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box style={{ backgroundColor: "black", padding: "20px", color: "#fff", textAlign: "center" }}>
      <Typography variant="h4" style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#ff7eb3" }}>
        Explore Countries 🌍
      </Typography>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              // Skeleton Loader
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
          : countries.map((country, index) => (
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
