import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: "#211d1d",
    color: "white",
    textAlign: "center",
    padding: "30px 0",
    width: "100%",
    borderTop: "2px solid #444",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
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
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} KnowYourCountry. All Rights Reserved.
      </p>

      <div style={linkContainerStyle}>
        <span
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          onClick={() => navigate("/")}
        >
          Home
        </span>
        |
        <span
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          onClick={() => navigate("/about")}
        >
          About
        </span>
        |
        <span
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          onClick={() => navigate("/country")}
        >
          Country
        </span>
        |
        <span
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </span>
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#bbb" }}>
        <p>
          Have any questions? Reach us at{" "}
          <a
            href="mailto:support@knowyourcountry.com"
            style={{ color: "#f0a500" }}
          >
            support@knowyourcountry.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
