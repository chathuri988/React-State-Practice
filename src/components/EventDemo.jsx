import React, { useState } from "react";

function EventDemo() {
  const [message, setMessage] = useState("Try interacting with the elements below 👇");
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => setMessage("🖱️ Button Clicked!");
  const handleDoubleClick = () => setMessage("⚡ Button Double-Clicked!");
  const handleMouseEnter = () => setMessage("🐭 You hovered over the box!");
  const handleMouseLeave = () => setMessage("👋 Mouse left the box!");
  const handleKeyPress = (e) => setMessage(`⌨️ You pressed: ${e.key}`);
  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          width: "420px",
        }}
      >
        <h1 style={{ marginBottom: "15px", color: "#444" }}>
          🎨 Event Handling Playground
        </h1>
        <p style={{ fontSize: "16px", marginBottom: "25px", color: "#666" }}>
          Click, hover, or type to see events in action!
        </p>

        {/* Click and Double Click Buttons */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            style={{
              backgroundColor: "#4A90E2",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ABD")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A90E2")}
          >
            🖱️ Click Me
          </button>
        </div>

        {/* Mouse Over Box */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "220px",
            height: "120px",
            margin: "0 auto 25px",
            borderRadius: "15px",
            backgroundColor: "#FFD369",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            color: "#444",
            fontWeight: "500",
            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            transition: "0.3s",
          }}
        >
          Hover Here 👀
        </div>

        {/* Keyboard & Input Events */}
        <div>
          <input
            type="text"
            placeholder="Type something..."
            onKeyDown={handleKeyPress}
            onChange={handleChange}
            value={inputValue}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              outline: "none",
              fontSize: "15px",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #4A90E2")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          />
        </div>

        {/* Message Display */}
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#f1f1f1",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ margin: 0, color: "#555", fontWeight: "500" }}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDemo;
