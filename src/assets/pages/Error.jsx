import React from "react";
import { useRouteError, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Oops! Error Occurred</h1>
      <h2 style={{ fontSize: "2rem" }}>{error && error.data}</h2>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error Diagram"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        {error && error.message}
      </p>
      <NavLink to="/">
        <Button
          variant="contained"
          style={{ backgroundColor: "#721c24", color: "white" }}
        >
          Go Back
        </Button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
