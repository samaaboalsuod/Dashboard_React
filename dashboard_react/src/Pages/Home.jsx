import React, { Component } from 'react';
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import StrokeBut from '../Components/StrokeBut';
import BigCardTitle from '../Components/BigCardTitle';
import OverviewCard from '../Components/OverviewCard';
import ProjectCard from '../Components/ProjectCard';
import RecentCard from '../Components/RecentCard';

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
import placeHoldImg from '../Assets/placeHoldImg.jpg';






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

                    <div className='column'>

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

                    <div className='column'>

                       <BigCardTitle title="Drafted Projects" />

                       <div className='draftCont'>

                            <ProjectCard
                               title="Giza Zoo"
                               description="UI/UX Design"
                               date="21/09/2025"
                               tags={['Tags', 'Date', 'Goal Statement', 'Arabic Font', 'Description']}
                               bgColor="#FFF3F8"
                               onContinue={() => console.log('Giza Zoo')}
                            />

                            <ProjectCard
                               title="Pyramids of Giza"
                               description="Photography"
                               date="14/11/2024"
                               tags={['Place', 'Shutter', 'Description']}
                               bgColor="#FEFFF3"
                               onContinue={() => console.log('Giza Zoo')}
                            />

                            <ProjectCard
                               title="Fruit Painting"
                               description="Graphic Design"
                               date="21/09/2025"
                               tags={['Tools', 'Date', 'Project Media', 'Hero Media']}
                               bgColor="#F3FBFF"
                               onContinue={() => console.log('Giza Zoo')}
                            />
                       </div>


                    </div>

                </div>

                <div className='sec1'>

                    <div className='column'>

                       <BigCardTitle title="Recant added projects" />

                       <div className='overCardsCont'>

                          <RecentCard image={placeHoldImg} title="Ummah Game App"  category="UI/UX Design"  time="03/04/2025" />
                          <RecentCard image={placeHoldImg} title="Covertina Brand Manual"  category="Graphic Design"  time="05/10/2025" />
                          <RecentCard image={placeHoldImg} title="Robot"  category="3D Modeling"  time="08/15/2025" />


                       </div>

                    </div>

                </div>





            </div>

        </div>

    </section>
    
    
    
    </> );
}
 
export default Home;