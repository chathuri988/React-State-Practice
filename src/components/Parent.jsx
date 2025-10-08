import React, { useState } from "react";

function Child({ onValueChange }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        width: "80%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#4A90E2", marginBottom: "15px" }}>👶 Child Component</h3>
      <input
        type="text"
        placeholder="Type something here..."
        onChange={(e) => onValueChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "15px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #4A90E2")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />
      <p style={{ color: "#888", fontSize: "14px", marginTop: "8px" }}>
        (The text will appear in the Parent Component 👇)
      </p>
    </div>
  );
}

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
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
          padding: "50px 60px",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "25px" }}>
          🧑‍🤝‍🧑 State Lifting Example
        </h1>
        <Child onValueChange={setMessage} />

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#4A90E2", marginBottom: "10px" }}>👨 Parent Component</h3>
          <p
            style={{
              fontSize: "16px",
              color: message ? "#333" : "#888",
              transition: "0.3s",
              fontWeight: "500",
            }}
          >
            {message ? message : "No message yet... start typing above ✍️"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Parent;
