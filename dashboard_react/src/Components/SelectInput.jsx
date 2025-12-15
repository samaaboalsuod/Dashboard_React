import React from "react";
import "./SelectInput.css";

const SelectInput = ({ title, placeholder, options }) => {
  return (
    <div className="select-input-wrapper">
      <label className="select-input-label">{title}</label>

      <select className="select-input-field" defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
