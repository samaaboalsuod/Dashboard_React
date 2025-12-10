import React, { Component } from 'react';
import './TagButton.css'
const TagButton = (props) => {
    return ( <>
    
    <div className='tagBtn'>{props.tagBtnTxt}</div>
    
    </> );
}
 
export default TagButton;