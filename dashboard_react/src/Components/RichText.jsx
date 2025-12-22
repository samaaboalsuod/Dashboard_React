import React, { useState, useId } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; 
import "./RichText.css";

const RichText = ({ title, placeholder, maxChars }) => {
  const [value, setValue] = useState("");
  
  // This hook creates a unique string like ":r1:" for every component instance
  const reactId = useId();
  // We clean it up to make it a valid HTML ID (removing colons)
  const toolbarId = `toolbar-${reactId.replace(/:/g, "")}`;

  const modules = {
    toolbar: {
      container: `#${toolbarId}`,
    },
  };

  const handleChange = (content, delta, source, editor) => {
    // We strip HTML tags to count actual characters
    const plainText = editor.getText().trim();
    if (plainText.length <= maxChars) {
      setValue(content);
    }
  };

  return (
    <div className="richtext-wrapper">
      <label className="richtext-label">{title}</label>

      <div className="richtext-editor">
        {/* Dynamic unique ID applied here */}
        <div id={toolbarId} className="richtext-toolbar">
          <button className="ql-bold">B</button>
          <button className="ql-italic"><i>I</i></button>
          <button className="ql-underline"><u>U</u></button>
          <button className="ql-color">A:</button>
          <span className="divider" />
          <button className="ql-align" value=""></button>
          <button className="ql-align" value="center"></button>
          <button className="ql-align" value="right"></button>
          <span className="divider" />
          <button className="ql-link">🔗</button>
          <button className="ql-image">🖼</button>
          <button className="ql-clean">Tx</button>
        </div>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          modules={modules}
          className="richtext-quill"
        />
      </div>

      <span className="richtext-counter">
        {value.replace(/<[^>]*>/g, "").length}/{maxChars} characters
      </span>
    </div>
  );
};

export default RichText;