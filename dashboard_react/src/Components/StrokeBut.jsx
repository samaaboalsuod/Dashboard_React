import React, { Component } from 'react';
import './StrokeBut.css'

const StrokeBut = (props) => {
    return ( <>

    <button className='strokebut'>
        <img src={props.strokeButIcon} alt="" />
        <h6>{props.strokeButText}</h6>
    </button>
    
    
    
    </> );
}
 
export default StrokeBut;