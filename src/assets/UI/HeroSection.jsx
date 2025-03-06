import React from 'react'
import CountryFact from "../api/countrydata.json"; // Import JSON data
const HeroSection = () => {
    const sectionStyle = {
        backgroundColor: "black",
        padding: "40px 20px",
        color: "#fff",
        textAlign: "center",
        marginTop: "10px", // Positioned 10px below navbar
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
        background: "linear-gradient(135deg, rgb(23, 20, 20),rgb(114, 43, 73))",
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
    
  return (
    <div>
    <div style={sectionStyle}>
    <h1 style={headingStyle}>Discover Different Countries 🌎</h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
      {CountryFact.map((country) => (
        <div
          key={country.id}
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = hoverStyle.transform)}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h1 style={{padding:"0px,0px,20px,0px", textAlign:"center",}}>{country.name}</h1> {/* Country Name as h1 */}
          <p ><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Currency:</strong> {country.currency}</p>
          <p><strong>Fact:</strong> {country.interesting_fact}</p>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default HeroSection
