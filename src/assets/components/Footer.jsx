import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: "#211d1d",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
    width: "100%",
    borderTop: "2px solid #444",
    fontSize: "16px",
  };

  const linkContainerStyle = {
    marginTop: "10px",
  };

  const linkStyle = {
    color: "#bbb",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "14px",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
  };

  const hoverStyle = {
    color: "#f0a500", // Gold-like hover effect
  };

  return (
    <div style={footerStyle}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} KnowYourCountry. All Rights Reserved.</p>
      <div style={linkContainerStyle}>
        <span 
          style={linkStyle} 
          onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
          onMouseOut={(e) => e.target.style.color = linkStyle.color} 
          onClick={() => navigate("/")}
        >
          Home
        </span> 
        | 
        <span 
          style={linkStyle} 
          onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
          onMouseOut={(e) => e.target.style.color = linkStyle.color} 
          onClick={() => navigate("/about")}
        >
          About
        </span> 
        | 
        <span 
          style={linkStyle} 
          onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
          onMouseOut={(e) => e.target.style.color = linkStyle.color} 
          onClick={() => navigate("/country")}
        >
          Country
        </span> 
        | 
        <span 
          style={linkStyle} 
          onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
          onMouseOut={(e) => e.target.style.color = linkStyle.color} 
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </span>
      </div>
    </div>
  );
}

export default Footer;
