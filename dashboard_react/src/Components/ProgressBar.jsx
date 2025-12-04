import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ country, percentage, color }) => {
  return (
    <div className="progressBarContainer">

      <span className="countryName">{country}</span>

      <div className="progressWrapper">
        <div className="progressTrack">
          <div
            className="progressFill"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </div>

        <span className="percentageText">{percentage}%</span>
      </div>

    </div>
  );
};

export default ProgressBar;
