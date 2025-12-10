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

import addIcon from '../Assets/add.svg'
import editIcon from '../Assets/edit.svg'

import projectsCardIcon from '../Assets/projectsCardIcon.svg'
import UXcardIcon from '../Assets/UXcardIcon.svg'
import FrontCardIcon from '../Assets/FrontCardIcon.svg'
import GraphicCardIcon from '../Assets/GraphicCardIcon.svg'
import DCardIcon from '../Assets/3DCardIcon.svg'
import PhotoCardIcon from '../Assets/PhotoCardIcon.svg'
import placeHoldImg from '../Assets/placeHoldImg.jpg';
import chart1 from '../Assets/chart1.svg';
import WorldMap from '../Assets/WorldMap.svg';
import ProgressBar from '../Components/ProgressBar';
import DonutChart from '../Components/DonutChart';
import Footer from '../Components/Footer';
import TheSideBar from '../Components/TheSideBar';



const chartData1 = [
  { label: "Direct", value: 65, color: "#6C80FF" },      // purple
  { label: "Behance", value: 20, color: "#68D49E" },     // green
  { label: "LinkedIn", value: 15, color: "#19DBFF" },    // cyan
];
const chartData2 = [
  { label: "Mobile", value: 65, color: "#6C80FF" },      // purple
  { label: "Desktop", value: 20, color: "#68D49E" },     // green
  { label: "Tablet", value: 15, color: "#FFAE4C" },    // cyan
];



const Home = () => {
    return ( <>
    
    <header>
        <Nav pageTitle="Dashboard" />
    </header>

    <section className='MainArea'>

        <TheSideBar />

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

                       <BigCardTitle title="Recent added projects" />

                       <div className='overCardsCont'>

                          <RecentCard image={placeHoldImg} title="Ummah Game App"  category="UI/UX Design"  time="03/04/2025" />
                          <RecentCard image={placeHoldImg} title="Covertina Brand Manual"  category="Graphic Design"  time="05/10/2025" />
                          <RecentCard image={placeHoldImg} title="Robot"  category="3D Modeling"  time="08/15/2025" />


                       </div>

                    </div>

                </div>

                <div className='sec1'>
                    <div className='column'>

                        <div className='chartDataCol'>
                            <h5>Visitors Numbers</h5>
                            <div className='number'>1120</div>
                            <p>40% more than last month</p>
                        </div>

                        <div className='chart1'>
                          <img src={chart1} alt="" />
                        </div>
                    </div>

                    <div className='column'>

                        <BigCardTitle title="Users by country" />

                        <div className='mapSecCont'>

                            <div className='mapDataSec'>

                                <div className='mapTitle'>

                                    <h2>12.4 K</h2>

                                    <div className='greenPer'>
                                        <div>28.5%</div>
                                    </div>

                                </div>

                                <div className='progressBarsCont'>
                                    <ProgressBar country="United States" percentage={40} color="#FF6384" />
                                    <ProgressBar country="Germany" percentage={25} color="#36A2EB" />
                                    <ProgressBar country="Australia" percentage={15} color="#FFCE56" />
                                    <ProgressBar country="United Kingdom" percentage={10} color="#4BC0C0" />
                                    <ProgressBar country="Italy" percentage={5} color="#9966FF" />
                                </div>

                            </div>

                            <div className='worldMap'>
                                <img src={WorldMap} alt="World Map" />
                            </div>

                        </div>

                    </div>
                </div>

                <div className='chartsCont' >

                   <div className='sec2'>

                    <BigCardTitle title="Traffic Sources" />
                        
                    <DonutChart data={chartData1} size={260} strokeWidth={32} />
  
                   </div>

                   <div className='sec2'>

                    <BigCardTitle title="Devices Overview" />
                        
                    <DonutChart data={chartData2} size={260} strokeWidth={32} />
  
                   </div>

                </div>


            </div>

        </div>

    </section>
    
    <Footer />
    
    </> );
}
 
export default Home;