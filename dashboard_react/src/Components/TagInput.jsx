import React, { useState } from "react";
import "./TagInput.css";
import TagButton from "./TagButton";

const TagInput = ({ title, placeholderText, maxTags = 6, value, onChange }) => {
  
  const addTag = () => {
    if (value.length >= maxTags) return;
    // This sends the updated array back to the parent
    onChange([...value, `Color ${value.length + 1}`]);
  };

  return (
    <div className="taginput-wrapper">
      <label className="taginput-label">{title}</label>
      <div className="taginput-field">
        {value.map((tag, index) => (
          <TagButton
            key={index}
            tagBtnTxt={tag}
            isSelected={true}
          />
        ))}

        {value.length < maxTags && (
          <TagButton
            tagBtnTxt={`+ ${placeholderText}`}
            isSelected={false}
            onClick={addTag} // Now triggers the parent update
          />
        )}
      </div>
      <span className="taginput-helper">{maxTags} colors Max</span>
    </div>
  );
};

export default TagInput;
