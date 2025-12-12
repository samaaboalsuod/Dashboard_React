// Button.jsx

import React from 'react';
import './Button.css';

// Added IconSrc property for the image source
const Button = ({ BtnText, IconSrc, ...rest }) => {
    return ( 
        // Pass any other standard button props like onClick, type, etc.
        <button className="customButton" {...rest}>
            {/* 1. Conditionally render the icon */}
            {IconSrc && (
                <img src={IconSrc} alt="" className="buttonIcon" />
            )}
            
            {/* 2. Text */}
            <span className="buttonText">{BtnText}</span>
        </button>
    );
}
 
export default Button;