import React, { Component } from 'react';
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import StrokeBut from '../Components/StrokeBut';
import BigCardTitle from '../Components/BigCardTitle';
import OverviewCard from '../Components/OverviewCard';

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

import projectsCardIcon from '../Assets/projectsCardIcon.svg'
import UXcardIcon from '../Assets/UXcardIcon.svg'
import FrontCardIcon from '../Assets/FrontCardIcon.svg'
import GraphicCardIcon from '../Assets/GraphicCardIcon.svg'
import DCardIcon from '../Assets/3DCardIcon.svg'
import PhotoCardIcon from '../Assets/PhotoCardIcon.svg'



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

            <div className='AllContent'>

                <div className='sec1'>

                    <BigCardTitle title="Projects Overview" />

                    <div className='overCardsCont'>

                        <OverviewCard title="Total Projects" number="24" percentage="+12%" icon={projectsCardIcon} color="#FBF3FF" />
                        <OverviewCard title="UI/UX Design" number="10" percentage="50% of total" icon={UXcardIcon} color="#FFF3F8" />
                        <OverviewCard title="Front End" number="4" percentage="20% of total" icon={FrontCardIcon} color="#F4F3FF" />
                        <OverviewCard title="Graphic Design" number="3" percentage="10% of total" icon={GraphicCardIcon} color="#F3FBFF" />
                        <OverviewCard title="3D Modeling" number="3" percentage="12% of total" icon={DCardIcon} color="#F3FFF4" />
                        <OverviewCard title="Photography" number="9" percentage="20% of total" icon={PhotoCardIcon} color="#FEFFF3" />

                    </div>
                </div>



            </div>

        </div>

    </section>
    
    
    
    </> );
}
 
export default Home;