import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { supabase } from '../Supabase';
import './Home.css'

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import TheSideBar from '../Components/TheSideBar';
import StrokeBut from '../Components/StrokeBut';
import BigCardTitle from '../Components/BigCardTitle';
import OverviewCard from '../Components/OverviewCard';
import ProjectCard from '../Components/ProjectCard';
import RecentCard from '../Components/RecentCard';
import ProgressBar from '../Components/ProgressBar';
import DonutChart from '../Components/DonutChart';

import addIcon from '../Assets/add.svg'
import editIcon from '../Assets/edit.svg'
import placeHoldImg from '../Assets/placeHoldImg.jpg';
import chart1 from '../Assets/chart1.svg';
import WorldMap from '../Assets/WorldMap.svg';

const chartData1 = [
  { label: "Direct", value: 65, color: "#6C80FF" },     
  { label: "Behance", value: 20, color: "#68D49E" },    
  { label: "LinkedIn", value: 15, color: "#19DBFF" },   
];
const chartData2 = [
  { label: "Mobile", value: 65, color: "#6C80FF" },      
  { label: "Desktop", value: 20, color: "#68D49E" },     
  { label: "Tablet", value: 15, color: "#FFAE4C" },    
];

const Home = () => {
    const navigate = useNavigate(); // For the Edit button navigation
    const [systemIcons, setSystemIcons] = useState([]);
    const [recentProjects, setRecentProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [drafts, setDrafts] = useState([]);

    const getSystemIcons = async () => {
        const { data, error } = await supabase.from('SystemIcons').select('*');
        if (error) console.error("Icons Fetch Error:", error);
        if (data) setSystemIcons(data);
    };

    const getRecentProjects = async () => {
        const { data, error } = await supabase
            .from('Projects')
            .select(`*, Categories ( color )`)
            .order('created_at', { ascending: false })
            .limit(3);
        if (error) console.error("Home Fetch Error:", error);
        if (data) setRecentProjects(data);
    };

    const getDashboardStats = async () => {
        const { data, error } = await supabase
            .from('Categories')
            .select('title, Project_Numbers, icon, percentage, color');
        if (error) return;
        if (data) {
            const desiredOrder = ["Total Projects", "UI/UX Design", "Front End", "Graphic Design", "3D Modeling", "Photography"];
            const sortedData = data.sort((a, b) => desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title));
            setCategories(sortedData);
        }
    };

    const getDrafts = async () => {
        const { data, error } = await supabase.from('Projects').select(`*, Categories ( color )`).eq('status', 'Unpublished').limit(3);
        if (data) setDrafts(data);
    };

    useEffect(() => {
        getRecentProjects();
        getDashboardStats();
        getDrafts();
        getSystemIcons();
    }, []);

    const getIcon = (altName) => {
        const found = systemIcons.find(icon => icon.alt === altName);
        return found ? found.icon : ""; 
    };

    // --- HANDLERS ---
    const handleEditProject = (proj) => {
        // Navigates to the edit page with the project ID
        navigate(`/ProjectEdit/${proj.id}`);
    };

    const handleDeleteProject = async (id, title) => {
        if (window.confirm(`Delete ${title}?`)) {
            const { error } = await supabase.from('Projects').delete().eq('id', id);
            if (!error) getRecentProjects();
            else alert(error.message);
        }
    };

    return (
        <>
            <header><Nav pageTitle="Dashboard" /></header>
            <section className='MainArea'>
                <TheSideBar />
                <div className='contentArea'>
                    <div className='toptwobut'>
                        <Link to="/ProjectEdit"> <StrokeBut strokeButIcon={addIcon} strokeButText="Add a new Project" /> </Link>
                        <Link to="/Categories"> <StrokeBut strokeButIcon={editIcon} strokeButText="Edit Categories" /> </Link>
                    </div>

                    <div className='AllContent'>
                        <div className='sec1'>
                            <div className='column'>
                                <BigCardTitle title="Projects Overview" />
                                <div className='overCardsCont'>
                                    {categories.map((cat, index) => (
                                        <OverviewCard key={index} title={cat.title} number={cat.Project_Numbers} percentage={cat.percentage} icon={cat.icon} color={cat.color} />
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
                                            tags={[!proj.pageTitle && "Title", !proj.date && "Date", !proj.metaDescription && "Description", !proj.Cover_Media && "Media"].filter(Boolean)}
                                            bgColor={proj.Categories?.color || "#f9f9f9"}
                                            onContinue={() => handleEditProject(proj)}
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
                                            /* ICONS ORDER MATCHING YOUR PREFERENCE: Index 0=Delete, Index 2=Edit */
                                            icons={[
                                                getIcon("deleteIcon"), // Index 0
                                                getIcon("peviewIcon"), // Index 1
                                                getIcon("editIcon")    // Index 2
                                            ]}
                                            onDelete={() => handleDeleteProject(proj.id, proj.title)}
                                            onEdit={() => handleEditProject(proj)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Charts and Map sections remain the same */}
<div className='sec1'>
    <div className='column full-width-card'>
        <BigCardTitle title="Users by country" />
        <div className='mapLayoutContainer'>
            {/* Left Side: Stats & Bars */}
            <div className='mapStatsColumn'>
                <div className='mapHeader'>
                    <h2 className='largeNumber'>12.4 K</h2>
                    <div className='greenPer'>28.5% ↗</div>
                </div>
                
                {/* Your ProgressBar component works best when stacked like this */}
                <div className='barsList'>
                    <ProgressBar country="United States" percentage={30} color="#BF5AF2" />
                    <ProgressBar country="United Kingdom" percentage={20} color="#6C80FF" />
                    <ProgressBar country="Canada" percentage={20} color="#909CFE" />
                    <ProgressBar country="Australia" percentage={15} color="#19DBFF" />
                    <ProgressBar country="Spain" percentage={15} color="#D1D1D6" />
                </div>
            </div>

            {/* Right Side: The Map */}
            <div className='mapGraphicColumn'>
                <img src={WorldMap} alt="World Map" className='worldMapImg' />
            </div>
        </div>
    </div>
</div>


<div className='sec1 doubleChartRow'>
    <div className='column'>
        <BigCardTitle title="Traffic Sources" />
        <div className='chartCenter'>
            <DonutChart data={chartData1} />
        </div>
    </div>
    <div className='column'>
        <BigCardTitle title="Devices Overview" />
        <div className='chartCenter'>
            <DonutChart data={chartData2} />
        </div>
    </div>
</div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;