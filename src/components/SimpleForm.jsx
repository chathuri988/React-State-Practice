import React, { useState } from "react";

function StylishForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "20px",
            fontSize: "1.8rem",
          }}
        >
          ✨ User Information Form
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  textAlign: "left",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "15px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #4A90E2")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  textAlign: "left",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "15px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #4A90E2")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#4A90E2",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#357ABD")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#4A90E2")
              }
            >
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h2 style={{ color: "#4A90E2" }}>✅ Submitted Successfully!</h2>
            <p style={{ color: "#555", marginTop: "10px" }}>
              <strong>Name:</strong> {name}
              <br />
              <strong>Email:</strong> {email}
            </p>
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#FF4C4C",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
              }}
              onClick={() => setSubmitted(false)}
            >
              🔁 Fill Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StylishForm;
