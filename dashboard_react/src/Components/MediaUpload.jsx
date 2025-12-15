import React from "react";
import "./MediaUpload.css";

const MediaUpload = ({
  title,
  icon,
  centerText,
  helperText
}) => {
  return (
    <div className="media-upload-wrapper">
      <label className="media-upload-label">{title}</label>

      <div className="media-upload-box">
        <div className="media-upload-content">
          <div className="media-upload-icon">
            <img src={icon} alt="upload icon" />
          </div>

          <span className="media-upload-text">{centerText}</span>
        </div>

        <input
          type="file"
          className="media-upload-input"
          multiple
        />
      </div>

      <span className="media-upload-helper">
        {helperText}
      </span>
    </div>
  );
};

export default MediaUpload;
