import React from "react";
import "./ShortInput.css";

const ShortInput = ({ title, placeholder }) => {
  return (
    <div className="short-input-wrapper">
      <label className="short-input-label">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="short-input-field"
      />
    </div>
  );
};

export default ShortInput;
