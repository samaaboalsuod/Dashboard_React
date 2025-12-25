import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PagesList.css'
import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import PageTopCont from '../Components/PageTopCont';
import RecentCard from '../Components/RecentCard';
import placeHoldImg from '../Assets/placeHoldImg.jpg';
import { supabase } from '../Supabase';

const PagesList = () => {
    const navigate = useNavigate();

    const [staticPages, setStaticPages] = useState([]);
    const [dynamicProjects, setDynamicProjects] = useState([]);
    const [systemIcons, setSystemIcons] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleEdit = (id) => {
        navigate(`/ProjectEdit/${id}`);
    };

    // 1. Fetching Logic
    const fetchData = async () => {
        // Fetch Icons
        const { data: iconsData } = await supabase.from('SystemIcons').select('*');
        if (iconsData) setSystemIcons(iconsData);

        // Fetch Static Pages
        const { data: pagesData } = await supabase.from('Pages').select('*');
        if (pagesData) setStaticPages(pagesData);

        // Fetch Dynamic Projects
        const { data: projectsData } = await supabase
            .from('Projects')
            .select(`*, Categories ( color )`);
        if (projectsData) setDynamicProjects(projectsData);

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 2. Helper Functions (Defined here so they are available below)
    const formatDate = (dateString) => {
        if (!dateString) return "No Date";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US");
    };

    const getIcon = (altName) => {
        const found = systemIcons.find(icon => icon.alt === altName);
        return found ? found.icon : "";
    };

    // 3. Delete Logic
    const handleDelete = async (id, tableName, stateSetter) => {
        const confirmDelete = window.confirm(`Permanently delete this from ${tableName}?`);
        if (confirmDelete) {
            const { error } = await supabase.from(tableName).delete().eq('id', id);
            if (!error) {
                stateSetter(prev => prev.filter(item => item.id !== id));
                alert("Deleted successfully");
            } else {
                alert("Error: " + error.message);
            }
        }
    };

    if (loading) return <p style={{color: 'white'}}>Loading...</p>;

    return (
        <>
            <header>
                <Nav pageTitle="Pages List" />
            </header>

            <section className='MainArea'>
                <TheSideBar />
                <div className='contentArea'>
                    <div className='AllContent'>
                        <PageTopCont />
                        <div className='overCardsCont'>
                            
                            {/* Group 1: Static Pages */}
                            {staticPages.map((page) => (
                                <RecentCard
                                    key={page.id}
                                    image={page.Thumbnail || placeHoldImg}
                                    title={page.title || "Untitled"}
                                    category="Essentials"
                                    categoryColor={page.color || "#f1f1f1"} 
                                    slug={page.slug}
                                    projectState="Static"
                                    publishState={page.status}
                                    time={formatDate(page.created_at)}
                                    icons={[getIcon("deleteIcon"), getIcon("peviewIcon"), getIcon("editIcon")]}
                                    onDelete={() => handleDelete(page.id, 'Pages', setStaticPages)}
                                    onEdit={() => handleEdit(page.id)}
                                    
                                />
                            ))}

                            {/* Group 2: Dynamic Projects */}
                            {dynamicProjects.map((proj) => (
                                <RecentCard
                                    key={proj.id}
                                    image={proj.Thumbnail || placeHoldImg}
                                    title={proj.title || "Untitled Project"}
                                    category={proj.category} 
                                    categoryColor={proj.Categories?.color || proj.Categories?.[0]?.color} 
                                    slug={proj.slug}
                                    projectState="Dynamic"
                                    publishState={proj.status} 
                                    time={formatDate(proj.created_at)}
                                    icons={[getIcon("deleteIcon"), getIcon("peviewIcon"), getIcon("editIcon")]}
                                    onDelete={() => handleDelete(proj.id, 'Projects', setDynamicProjects)}
                                    onEdit={() => handleEdit(proj.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default PagesList;