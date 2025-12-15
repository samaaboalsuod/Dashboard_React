import React from "react";
import "./RichText.css";

const RichText = ({ title, placeholder, maxChars }) => {
  return (
    <div className="richtext-wrapper">
      <label className="richtext-label">{title}</label>

      <div className="richtext-editor">
        <div className="richtext-toolbar">
          <span>B</span>
          <span><i>I</i></span>
          <span><u>U</u></span>
          <span>A:</span>
          <span className="divider" />
          <span>≡</span>
          <span>≣</span>
          <span>≡≡</span>
          <span>¶</span>
          <span className="divider" />
          <span>🔗</span>
          <span>🖼</span>
          <span>😊</span>
          <span>＋</span>
          <span>↺</span>
          <span>↻</span>
          <span>⋮</span>
        </div>

        <textarea
          className="richtext-textarea"
          placeholder={placeholder}
          maxLength={maxChars}
        />
      </div>

      <span className="richtext-counter">
        0/{maxChars} character
      </span>
    </div>
  );
};

export default RichText;
