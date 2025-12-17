import React from "react";
import "./RememberCheck.css";

const RememberCheck = ({ checked, onChange }) => {
  return (
    <label className="rememberWrap">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="customBox"></span>
      <span className="rememberTxt">Remember me</span>
    </label>
  );
};

export default RememberCheck;
