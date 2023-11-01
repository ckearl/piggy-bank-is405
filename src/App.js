import logo from './logo.svg';
import './App.css';
import React from 'react';
import SavingsTracker from './SavingsTracker';
import Calendar from './Calendar';
import './Calendar.css';

function App() {
  return (
    <div className="App">
      <SavingsTracker />
      <div className="calendar-container">
        <Calendar/>
      </div>
    </div>
  );
}

export default App;
