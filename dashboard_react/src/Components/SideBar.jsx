import React, { Component } from 'react';
import './SideBar.css'


const SideBar = (props) => {
    return (
      <div className={`sdieBar ${props.isActive ? 'active' : ''}`}>
        <img src={props.barIcon} alt="barIcon" />
        <h6>{props.barAction}</h6>
      </div>
    );
  };
  
 
export default SideBar;