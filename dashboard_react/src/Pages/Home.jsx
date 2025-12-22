import React, { Component,useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import StrokeBut from '../Components/StrokeBut';
import BigCardTitle from '../Components/BigCardTitle';
import OverviewCard from '../Components/OverviewCard';
import ProjectCard from '../Components/ProjectCard';
import RecentCard from '../Components/RecentCard';


import addIcon from '../Assets/add.svg'
import editIcon from '../Assets/edit.svg'

import placeHoldImg from '../Assets/placeHoldImg.jpg';
import chart1 from '../Assets/chart1.svg';
import WorldMap from '../Assets/WorldMap.svg';
import ProgressBar from '../Components/ProgressBar';
import DonutChart from '../Components/DonutChart';
import Footer from '../Components/Footer';
import TheSideBar from '../Components/TheSideBar';
import { Link } from 'react-router-dom';



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

    const [recentProjects, setRecentProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [drafts, setDrafts] = useState([]);

    const getRecentProjects = async () => {
        const { data, error } = await supabase
            .from('Projects')
            .select(`*, Categories ( color )`)
            .order('created_at', { ascending: false }) // Newest first
            .limit(3); // Only 3 items

        if (error) console.error("Home Fetch Error:", error);
        if (data) setRecentProjects(data);
    };

const getDashboardStats = async () => {
        const { data, error } = await supabase
            .from('Categories')
            .select('title, Project_Numbers, icon, percentage, color');

        if (error) {
            console.error("Categories Fetch Error:", error);
            return;
        }

        if (data) {
            // Define your desired order by Title
            const desiredOrder = [
                "Total Projects",
                "UI/UX Design",
                "Front End",
                "Graphic Design",
                "3D Modeling",
                "Photography"
            ];

            // Sort the data based on the desiredOrder array
            const sortedData = data.sort((a, b) => {
                return desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title);
            });

            setCategories(sortedData);
        }
    };

    const getDrafts = async () => {
        const { data, error } = await supabase
            .from('Projects')
            .select(`*, Categories ( color )`)
            // Only pull projects that are NOT published
            .eq('status', 'Unpublished') 
            .limit(3);

        if (error) console.error("Drafts Error:", error);
        if (data) setDrafts(data);
    };


    useEffect(() => {
        getRecentProjects();
        getDashboardStats();
        getDrafts();
    }, []);

    // const formatDate = (dateString) => {
    //     if (!dateString) return "";
    //     return new Date(dateString).toLocaleDateString("en-US");
    // };
    
    return ( <>
    
    <header>
        <Nav pageTitle="Dashboard" />
    </header>

    <section className='MainArea'>

        <TheSideBar />

        <div className='contentArea'>

            <div className='toptwobut'>
                <Link to="/ProjectEdit"> <StrokeBut  strokeButIcon={addIcon}  strokeButText="Add a new Project" /> </Link>
                <Link to="/Categories"> <StrokeBut  strokeButIcon={editIcon}  strokeButText="Edit Categories" /> </Link>
            </div>

            <div className='AllContent'>

                <div className='sec1'>

                    <div className='column'>

                    <BigCardTitle title="Projects Overview" />

                    <div className='overCardsCont'>


            {/* 2. Dynamic Category Cards */}
            {categories.map((cat, index) => (
                <OverviewCard 
                    key={index}
                    title={cat.title} 
                    number={cat.Project_Numbers} 
                    percentage={cat.percentage} 
                    icon={cat.icon} // This uses the URL from your DB
                    color={cat.color} 
                />
            ))}

                    </div>

                    </div>

                    <div className='column'>

                       <BigCardTitle title="Drafted Projects" />

                       <div className='draftCont'>

            {drafts.map((proj) => (
                <ProjectCard
                    key={proj.id}
                    title={proj.title || "Untitled Draft"}
                    description={proj.category}
                    date={proj.date || "No Date"}
                    // DYNAMIC TAGS: We check for NULL values here
                    tags={[
                        !proj.pageTitle && "Title",
                        !proj.date && "Date",
                        !proj.metaDescription && "Description",
                        !proj.Cover_Media && "Media"
                    ].filter(Boolean)} // This removes 'false' values from the list
                    bgColor={proj.Categories?.color || "#f9f9f9"}
                    onContinue={() => console.log(`Editing project ${proj.id}`)}
                />
            ))}

                       </div>


                    </div>

                </div>

                <div className='sec1'>

                    <div className='column'>

                       <BigCardTitle title="Recent added projects" />

                       <div className='overCardsCont'>

                          {recentProjects.map((proj) => (
                <RecentCard
                    key={proj.id}
                    image={proj.Cover_Media || proj.Thumbnail || placeHoldImg}
                    title={proj.title}
                    category={proj.category}
                    categoryColor={proj.Categories?.color || proj.Categories?.[0]?.color}
                />
            ))}


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