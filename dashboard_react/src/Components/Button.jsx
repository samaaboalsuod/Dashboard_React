import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
    return ( 
        <button>{props.BtnText}</button>
     );
}
 
export default Button;