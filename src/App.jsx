import React, { useState } from "react";
import Counter from "./components/Counter";
import SimpleForm from "./components/SimpleForm";
import EventDemo from "./components/EventDemo";
import Parent from "./components/Parent";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  const buttonStyle = (tab) => ({
    backgroundColor: activeTab === tab ? "#4A90E2" : "white",
    color: activeTab === tab ? "white" : "#333",
    border: "1px solid #4A90E2",
    padding: "10px 18px",
    borderRadius: "8px",
    margin: "0 5px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <button style={buttonStyle("counter")} onClick={() => setActiveTab("counter")}>
          🧮 Counter
        </button>
        <button style={buttonStyle("form")} onClick={() => setActiveTab("form")}>
          📝 Form
        </button>
        <button style={buttonStyle("event")} onClick={() => setActiveTab("event")}>
          🖱️ Events
        </button>
        <button style={buttonStyle("lifting")} onClick={() => setActiveTab("lifting")}>
          🔗 State Lifting
        </button>
      </nav>

      {/* Page Content */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {activeTab === "counter" && <Counter />}
        {activeTab === "form" && <SimpleForm />}
        {activeTab === "event" && <EventDemo />}
        {activeTab === "lifting" && <Parent />}
      </div>
    </div>
  );
}

export default App;
