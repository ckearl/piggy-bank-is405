import React from "react";
import "./Sidebar.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faChartPie,
  faCalendarAlt,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <a href="#PiggyBank">
          <FontAwesomeIcon icon={faPiggyBank} /> {/* Piggy bank icon */}
        </a>
      </div>
      <div className="icon-container">
        <a href="#PieChart">
          <FontAwesomeIcon icon={faChartPie} /> {/* Pie chart icon */}
        </a>
      </div>
      <div className="icon-container">
        <a href="#Calendar">
          <FontAwesomeIcon icon={faCalendarAlt} /> {/* Calendar icon */}
        </a>
      </div>
      <div className="icon-container">
        <a href="#Games">
          <FontAwesomeIcon icon={faGamepad} /> {/* Game controller icon */}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
