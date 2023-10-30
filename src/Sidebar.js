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
        <FontAwesomeIcon icon={faPiggyBank} /> {/* Piggy bank icon */}
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faChartPie} /> {/* Pie chart icon */}
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faCalendarAlt} /> {/* Calendar icon */}
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faGamepad} /> {/* Game controller icon */}
      </div>
    </div>
  );
};

export default Sidebar;
