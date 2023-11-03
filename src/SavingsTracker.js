// src/components/SavingsTracker.js
import React, { useState, useEffect } from "react";
import "./SavingsTracker.css"; // Import the CSS file for styling
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { ArcElement } from "chart.js";
import ChartJS from "chart.js/auto";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement);
const SavingsTracker = () => {
  const [dailyEarnings, setDailyEarnings] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [giving, setGiving] = useState("");

  const [chartData, setChartData] = useState({
    labels: ["Daily Earnings", "Current Savings", "Goal Amount", "Giving"],
    datasets: [
      {
        data: [dailyEarnings, currentSavings, goalAmount, giving],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FFCE57"],
      },
    ],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      dailyEarnings,
      currentSavings,
      goalAmount,
      giving,
    });
  };

  useEffect(() => {
    setChartData({
      labels: ["Daily Earnings", "Current Savings", "Goal Amount", "Giving"],
      datasets: [
        {
          data: [dailyEarnings, currentSavings, goalAmount, giving],
          backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FF9C36"],
        },
      ],
    });
  }, [dailyEarnings, currentSavings, goalAmount, giving]);

  return (
    <div>
      <div className="page-container">
        <Sidebar /> {/* Include the Sidebar component */}
        <div className="content">
          <h1>Savings Tracker</h1>
          <form className="savings-form" onSubmit={handleFormSubmit}>
            <div id="PiggyBank">
              <label htmlFor="dailyEarnings">Daily Earnings:</label>
              <input
                type="number"
                id="dailyEarnings"
                value={dailyEarnings}
                onChange={(e) => setDailyEarnings(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="currentSavings">Current Savings:</label>
              <input
                type="number"
                id="currentSavings"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="goalAmount">Goal Amount:</label>
              <input
                type="number"
                id="goalAmount"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="giving">Giving:</label>
              <input
                type="number"
                id="giving"
                value={giving}
                onChange={(e) => setGiving(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>

          {/* Render the Pie chart component */}
          <div className="PieChart" id="PieChart">
            <h2>Pie Chart</h2>
            <Pie data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsTracker;
