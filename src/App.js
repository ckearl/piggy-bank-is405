import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SavingsTracker from "./SavingsTracker";
import Calendar from "./Calendar";
import "./Calendar.css";

function App() {
  return (
    <div className="App">
      <div id="PiggyBank">
        <SavingsTracker />
      </div>
      <div className="calendar-container" id="Calendar">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
