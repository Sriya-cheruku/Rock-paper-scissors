import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [score, setScore] = useState(12);
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="app">
      <Header score={score} />
      <Game setScore={setScore} />

      <button
        className="rules-btn"
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>

      {showRules && (
  <div className="rules-overlay">
    <div className="rules-modal">
      
      <div className="rules-header">
        <h2>RULES</h2>
        <button
          className="close-btn"
          onClick={() => setShowRules(false)}
        >
          ✕
        </button>
      </div>

      <img
        src="/images/image-rules.svg"
        alt="rules"
        className="rules-image"
      />

    </div>
  </div>
)}
    </div>
  );
}

export default App;