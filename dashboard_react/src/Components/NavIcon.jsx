import React, { Component } from 'react';
import './NavIcon.css';

const NavIcon = (props) => {
    return ( 
        <div className='navIconRec'>
            <img src={props.navIcon} alt="navIcon" />
        </div>
     );
}
 
export default NavIcon;