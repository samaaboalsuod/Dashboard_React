import React from "react";
import "./DonutChart.css";

const DonutChart = ({ data, size = 250, strokeWidth = 30 }) => {
  // data = [{ label: "Direct", value: 65, color: "#6C80FF" }, ...]

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <div className="donutContainer">

      <svg width={size} height={size} className="donutSvg">
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((item, i) => {
            const dash = (item.value / 100) * circumference;
            const segment = (
              <circle
                key={i}
                className="donutSegment"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );

            offset += dash;
            return segment;
          })}
        </g>
      </svg>

      {/* Percentages inside the donut */}
      <div className="donutLabels">
        {data.map((item, i) => {
          return (
            <span
              key={i}
              className="donutPercent"
              style={{ color: item.color }}
            >
              {item.value}%
            </span>
          );
        })}
      </div>

      {/* Legend */}
      <div className="donutLegend">
        {data.map((item, i) => (
          <div className="legendItem" key={i}>
            <span
              className="legendDot"
              style={{ backgroundColor: item.color }}
            ></span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DonutChart;
