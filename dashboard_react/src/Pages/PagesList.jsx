import React, { useEffect, useState } from 'react';
import './PagesList.css'
import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import PageTopCont from '../Components/PageTopCont';
import RecentCard from '../Components/RecentCard';
import placeHoldImg from '../Assets/placeHoldImg.jpg';
import { supabase } from '../Supabase';

const PagesList = () => {
    const [staticPages, setStaticPages] = useState([]);
    const [dynamicProjects, setDynamicProjects] = useState([]);

    const getStaticPages = async () => {
        const { data, error } = await supabase.from('Pages').select('*');
        if (error) console.error("Static Pages Error:", error);
        if (data) setStaticPages(data);
    };

    const getDynamicProjects = async () => {
        // Fetching Projects and joining Categories table
        const { data, error } = await supabase
            .from('Projects')
            .select(`*, Categories ( color )`); 
            
        if (error) console.error("Projects Error:", error);
        
        // Debugging the Color specifically
        if (data && data.length > 0) {
            console.log("Color Check for first project:", data[0].Categories);
        }
        
        if (data) setDynamicProjects(data);
    };

    useEffect(() => {
        getStaticPages();
        getDynamicProjects();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "No Date";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US");
    };

    return (
        <>
            <header><Nav pageTitle="Pages List" /></header>
            <section className='MainArea'>
                <TheSideBar />
                <div className='contentArea'>
                    <div className='AllContent'>
                        <PageTopCont />
                        <div className='overCardsCont'>
                            
                            {staticPages.length === 0 && dynamicProjects.length === 0 && (
                                <p style={{color: 'white'}}>Loading or No Data Found...</p>
                            )}

                            {/* Group 1: Static Pages */}
                            {staticPages.map((page) => (
                                <RecentCard
                                    key={page.id}
                                    image={page.Thumbnail || placeHoldImg}
                                    title={page.title || "Untitled"}
                                    category="Essentials"
                                    // Make sure 'color' is the column name in your Pages table
                                    categoryColor={page.color || "#f1f1f1"} 
                                    slug={page.slug}
                                    projectState="Static"
                                    publishState={page.status}
                                    time={formatDate(page.created_at)}
                                />
                            ))}

{/* Group 2: Dynamic Projects */}
{dynamicProjects.map((proj) => (
    <RecentCard
        key={proj.id}
        image={proj.Thumbnail || placeHoldImg}
        title={proj.title || "Untitled Project"}
        
        // FIX: Match your 'Projects' table column name (lowercase 'c')
        category={proj.category} 
        
        // FIX: Deeply check both Object and Array structures for the color
        categoryColor={proj.Categories?.color || proj.Categories?.[0]?.color} 
        
        slug={proj.slug}
        projectState="Dynamic"
        
        // FIX: Your DB already says "Unpublished". Just pass that string!
        publishState={proj.status} 
        
        time={formatDate(proj.created_at)}
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