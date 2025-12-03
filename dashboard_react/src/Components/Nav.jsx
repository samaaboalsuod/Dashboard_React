import React, { Component } from 'react';
import './Nav.css'

import Logo from '../Assets/logo.svg'
import Notify from '../Assets/notifyIcon.svg'
import Preview from '../Assets/previewIcon.svg'
import Profile from '../Assets/profileIcon.svg'

import SearchBar from './SearchBar';
import NavIcon from './NavIcon';

const Nav = (props) => {
    return ( <>
    
    <nav>

        <div className='logoPart'>
            <img className='logo' src={Logo} alt="logo" />
            <h4>Hi,Samaa</h4>
        </div>

        <h3 className='pageTitle'>{props.pageTitle}</h3>

        <div className='navHalf'>

        <SearchBar SearchText="What do you search for..." />

        <div className='navIconCont'>
            <NavIcon  navIcon={Notify} />
            <NavIcon  navIcon={Preview} />
            <NavIcon  navIcon={Profile} />
        </div>
        
        </div>

    </nav>
    
    
    </> );
}
 
export default Nav;