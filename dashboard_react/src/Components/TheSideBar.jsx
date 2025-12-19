import React, { Component } from 'react';
import './TheSideBar.css'
import SideBar from './SideBar';

import { Link } from 'react-router-dom';

import DashIcon from '../Assets/dashIcon.svg'
import MailIcon from '../Assets/mailIcon.svg'
import ProjectIcon from '../Assets/ProjectIcon.svg'
import PagesIcon from '../Assets/PagesIcon.svg'
import CalendarIcon from '../Assets/calIcon.svg'
import profileIcon from '../Assets/proIcon.svg'
import MessageIcon from '../Assets/messIcon.svg'
import SettingIcon from '../Assets/settIcon.svg'





const TheSideBar = () => {
    return ( <>
    
    <div className='sideBar'>

            <Link to="/"> <SideBar barIcon={DashIcon} barAction="Dashboard" isActive={true} /> </Link>
            <Link to="/PagesList">  <SideBar  barIcon={PagesIcon}  barAction="Pages" isActive={false} /> </Link>
            <Link to="/Messages"> <SideBar  barIcon={MailIcon}  barAction="E-mail" isActive={false} />  </Link>
            {/* <Link to="/">  <SideBar  barIcon={ProjectIcon}  barAction="Projects" isActive={false} /> </Link> */}
            <Link to="/">  <SideBar  barIcon={CalendarIcon}  barAction="Calendar" isActive={false} /> </Link>
            {/* <Link to="/">  <SideBar  barIcon={profileIcon}  barAction="Profile" isActive={false} /> </Link> */}
            <Link to="/Messages">  <SideBar  barIcon={MessageIcon}  barAction="Messages" isActive={false} /> </Link>
            <Link to="/">  <SideBar  barIcon={SettingIcon}  barAction="Settings" isActive={false} /> </Link>

    </div>
    
    
    
    
    
    </> );
}
 
export default TheSideBar;