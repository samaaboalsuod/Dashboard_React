import React, { useState } from "react";
import "./TagInput.css";
import TagButton from "./TagButton";

const TagInput = ({
  title,
  placeholderText,
  maxTags = 6
}) => {
  const [tags, setTags] = useState([]);

  const addTag = () => {
    if (tags.length >= maxTags) return;

    setTags(prev => [
      ...prev,
      `Color ${prev.length + 1}`
    ]);
  };

  const toggleTag = (index) => {
    setTags(prev =>
      prev.map((tag, i) =>
        i === index ? { ...tag, selected: !tag.selected } : tag
      )
    );
  };

  return (
    <div className="taginput-wrapper">
      <label className="taginput-label">{title}</label>

      <div className="taginput-field">
        {tags.map((tag, index) => (
          <TagButton
            key={index}
            tagBtnTxt={tag}
            isSelected={false}
          />
        ))}

        {tags.length < maxTags && (
          <TagButton
            tagBtnTxt={`+ ${placeholderText}`}
            isSelected={false}
            onClick={addTag}
          />
        )}
      </div>

      <span className="taginput-helper">
        {maxTags} colors Max
      </span>
    </div>
  );
};

export default TagInput;
