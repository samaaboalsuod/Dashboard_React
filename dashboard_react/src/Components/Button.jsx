// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ BtnText, IconSrc, ...rest }) => {
  return (
    <button className="customButton" {...rest}>
      {IconSrc && <img src={IconSrc} alt="" className="buttonIcon" />}
      <span className="buttonText">{BtnText}</span>
    </button>
  );
};

export default Button;
