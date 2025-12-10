import React, { Component } from 'react';
import './Messages.css'
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import TableCard from '../Components/TableCard ';

import DashIcon from '../Assets/dashIcon.svg'
import MailIcon from '../Assets/mailIcon.svg'
import ProjectIcon from '../Assets/ProjectIcon.svg'
import PagesIcon from '../Assets/PagesIcon.svg'
import CalendarIcon from '../Assets/calIcon.svg'
import profileIcon from '../Assets/proIcon.svg'
import MessageIcon from '../Assets/messIcon.svg'
import SettingIcon from '../Assets/settIcon.svg'

import binFill from '../Assets/binFill.svg'
import prevFill from '../Assets/prevFill.svg'
import editFill from '../Assets/editFill.svg'
import MessagesTopCard from '../Components/MessagesTopCard';
import StrokeBut from '../Components/StrokeBut';






const Messages = () => {
    return ( <>
    
    
    <header>
        <Nav pageTitle="Messages" />
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


            <div className='AllContent'>

                <MessagesTopCard />


      {/* <TableCard
        title="UI/UX Design"
        subtitle="Website, web application and all screens design projects"
        count={12}
        date="21/10/2025"
        variant="grey"
        icons={[editFill, prevFill, binFill]}
      /> */}

      <div className='messCont'>


    <TableCard
        title="John Smith"
        subtitle="john.smith@example.com"
        middleText="Project Collaboration Inquiry"   /* <-- message title */
        date="21/10/2025"
        variant="grey"
        status="New"
        icons={[editFill, prevFill, binFill]}
      />
          <TableCard
        title="Alice Johnson"
        subtitle="john.smith@example.com"
        middleText="Design Feedback Request"   /* <-- message title */
        date="21/10/2025"
        variant="transparent"
        status="New"
        icons={[editFill, prevFill, binFill]}
      />
          <TableCard
        title="Michael Brown"
        subtitle="michael.brown@example.com"
        middleText="Feature Update Proposal"   /* <-- message title */
        date="21/10/2025"
        variant="grey"
        status="Read"
        icons={[editFill, prevFill, binFill]}
      />

      </div>

      <StrokeBut   strokeButText="Load More Messages" />



            </div>

        </div>

    </section>
    
    <Footer />
    
    
    
    
    
    </> );
}
 
export default Messages;