import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, Skeleton } from "@mui/material";

const CountryDetail = () => {
  const { name } = useParams(); // Get country name from URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]); // Get first matching country
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
        setLoading(false);
      });
  }, [name]);

  return (
    <Box style={{ backgroundColor: "black", color: "white", padding: "20px", textAlign: "center" }}>
      {loading ? (
        // Skeleton Loader
        <Box
          style={{
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(135deg, rgb(23, 20, 20), rgb(114, 43, 73))",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={200} style={{ borderRadius: "8px" }} />
          <Skeleton variant="text" width="60%" height={40} style={{ margin: "20px auto" }} />
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="text" width="50%" height={30} />
          <Skeleton variant="text" width="70%" height={30} />
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="rounded" width="120px" height={40} style={{ margin: "20px auto" }} />
        </Box>
      ) : country ? (
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(135deg, rgb(23, 20, 20), rgb(114, 43, 73))",
          }}
        >
          {/* Country Flag */}
          <img
            src={country.flags?.png}
            alt={`${country.name.common} Flag`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <Typography variant="h3" style={{ color: "#ff7eb3", margin: "20px 0" }}>
            {country.name.common}
          </Typography>

          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
          <p><strong>Currency:</strong> {country.currencies ? Object.keys(country.currencies)[0] : "N/A"}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>Timezone:</strong> {country.timezones.join(", ")}</p>

          {/* Back Button */}
          <Button variant="contained" onClick={() => navigate(-1)} style={{ backgroundColor: "#ff7eb3", color: "#fff" }}>
            Back
          </Button>
        </div>
      ) : (
        <Typography>Country not found.</Typography>
      )}
    </Box>
  );
};

export default CountryDetail;
