import React, { Component } from 'react';
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import StrokeBut from '../Components/StrokeBut';

import DashIcon from '../Assets/dashIcon.svg'
import MailIcon from '../Assets/mailIcon.svg'
import ProjectIcon from '../Assets/ProjectIcon.svg'
import PagesIcon from '../Assets/PagesIcon.svg'
import CalendarIcon from '../Assets/calIcon.svg'
import profileIcon from '../Assets/proIcon.svg'
import MessageIcon from '../Assets/messIcon.svg'
import SettingIcon from '../Assets/settIcon.svg'
import addIcon from '../Assets/add.svg'
import editIcon from '../Assets/edit.svg'

const Home = () => {
    return ( <>
    
    <header>
        <Nav pageTitle="Dashboard" />
    </header>

    <section className='MainArea'>

        <div className='sideBar'>

            <SideBar barIcon={DashIcon} barAction="Dashboard" isActive={true} />
            <SideBar  barIcon={MailIcon}  barAction="E-mail" isActive={false} />
            <SideBar  barIcon={ProjectIcon}  barAction="Projects" isActive={false} />
            <SideBar  barIcon={PagesIcon}  barAction="Pages" isActive={false} />
            <SideBar  barIcon={CalendarIcon}  barAction="Calendar" isActive={false} />
            <SideBar  barIcon={profileIcon}  barAction="Profile" isActive={false} />
            <SideBar  barIcon={MessageIcon}  barAction="Messages" isActive={false} />
            <SideBar  barIcon={SettingIcon}  barAction="Settings" isActive={false} />


        </div>

        <div className='contentArea'>

            <div className='toptwobut'>
                <StrokeBut  strokeButIcon={addIcon}  strokeButText="Add a new Project" />
                <StrokeBut  strokeButIcon={editIcon}  strokeButText="Edit Categories" />
            </div>

            <div className='AllContent'></div>
        </div>

    </section>
    
    
    
    </> );
}
 
export default Home;