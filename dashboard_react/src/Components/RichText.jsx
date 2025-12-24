import React, { useId } from "react"; // Removed useState here because the parent will hold it
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; 
import "./RichText.css";

// Added 'value' and 'onChange' to the props
const RichText = ({ title, placeholder, maxChars, value, onChange }) => {
  
  const reactId = useId();
  const toolbarId = `toolbar-${reactId.replace(/:/g, "")}`;

  const modules = {
    toolbar: {
      container: `#${toolbarId}`,
    },
  };

  const handleChange = (content, delta, source, editor) => {
    const plainText = editor.getText().trim();
    // Only send the update to the parent if it's within character limits
    if (plainText.length <= maxChars) {
      onChange(content); 
    }
  };

  return (
    <div className="richtext-wrapper">
      <label className="richtext-label">{title}</label>

      <div className="richtext-editor">
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
          value={value} // Parent's state
          onChange={handleChange} // Parent's state setter
          placeholder={placeholder}
          modules={modules}
          className="richtext-quill"
        />
      </div>

      <span className="richtext-counter">
        {value?.replace(/<[^>]*>/g, "").length || 0}/{maxChars} characters
      </span>
    </div>
  );
};

export default RichText;