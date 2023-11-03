//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SavingsTracker from "./SavingsTracker";
import Calendar from "./Calendar";
import "./Calendar.css";
import ToiletGame from "./ToiletGame";

function App() {
  return (
    <div className="App">
      <div>
        <SavingsTracker />
      </div>
      <div className="calendar-container" id="Calendar">
        <Calendar />
      </div>
      <div>
        {/* Embed the ToiletGame component in an iframe */}
        <iframe
          src="/toilet.html" // Replace with the actual path to your toiletgame.html file
          width="500"
          height="500"
          title="Toilet Game"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default App;
