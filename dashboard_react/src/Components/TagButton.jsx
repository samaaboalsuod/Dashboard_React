// TagButton.jsx

import React from 'react';
import './TagButton.css'

// Add isSelected and onClick to props destructuring
const TagButton = ({ tagBtnTxt, isSelected, onClick }) => {
    
    // Conditionally apply the 'selected' class
    const tagClass = `tagBtn ${isSelected ? 'selected' : ''}`;

    return ( 
        // Attach the onClick handler
        <div className={tagClass} onClick={onClick}>
            {tagBtnTxt}
        </div>
    );
}
 
export default TagButton;