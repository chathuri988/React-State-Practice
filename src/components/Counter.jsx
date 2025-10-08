import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    padding: "12px 20px",
    margin: "5px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  };

  const handleHover = (e, color) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 60px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
          🌟 React Counter App
        </h1>
        <h2
          style={{
            fontSize: "3rem",
            color: count > 0 ? "#4A90E2" : count < 0 ? "#FF4C4C" : "#555",
            transition: "0.3s",
          }}
        >
          {count}
        </h2>
        <div style={{ marginTop: "20px" }}>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, "#357ABD")}
            onMouseLeave={(e) => handleHover(e, "#4A90E2")}
            onClick={() => setCount(count + 1)}
          >
            ➕ Increment
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#FF4C4C" }}
            onMouseEnter={(e) => handleHover(e, "#CC3B3B")}
            onMouseLeave={(e) => handleHover(e, "#FF4C4C")}
            onClick={() => setCount(count - 1)}
          >
            ➖ Decrement
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#FFA500" }}
            onMouseEnter={(e) => handleHover(e, "#CC8400")}
            onMouseLeave={(e) => handleHover(e, "#FFA500")}
            onClick={() => setCount(0)}
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
