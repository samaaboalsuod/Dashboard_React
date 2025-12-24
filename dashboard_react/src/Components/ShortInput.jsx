import React from "react";
import "./ShortInput.css";

// Added value and onChange to the props
const ShortInput = ({ title, placeholder, value, onChange }) => {
  return (
    <div className="short-input-wrapper">
      <label className="short-input-label">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="short-input-field"
        value={value}             // Tells the input what to show
        onChange={onChange}       // Tells the parent when text changes
      />
    </div>
  );
};

export default ShortInput;