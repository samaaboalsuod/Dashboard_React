import React, { Component } from 'react';
import './SideBar.css'


const SideBar = (props) => {
    return (
        /* Changed 'sdieBar' to 'sideBarItem' to match your CSS mobile fix */
        <div className={`sideBarItem ${props.isActive ? 'active' : ''}`}>
            <img src={props.barIcon} alt="barIcon" />
            <h6>{props.barAction}</h6>
        </div>
    );
};
 
export default SideBar;