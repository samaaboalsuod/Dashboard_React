import React, { Component, useEffect, useState  } from 'react';
import { supabase } from '../Supabase';
import './Messages.css'

import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import CateTopCard from '../Components/CateTopCard';
import TableCard from '../Components/TableCard ';

import binFill from '../Assets/binFill.svg'
import prevFill from '../Assets/prevFill.svg'
import editFill from '../Assets/editFill.svg'


const Categories = () => {
  const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        // Fetching the columns needed for TableCard
        const { data, error } = await supabase
            .from('Categories')
            .select('id, title, Project_Numbers, created_at, color, description'); 
            
        if (error) console.error("Error fetching categories:", error);
        if (data) setCategories(data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "No Date";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
    };

    
    return ( <>
    
     <header>
        <Nav pageTitle="Categories" />
    </header>

    <section className='MainArea'>

        <TheSideBar />

        <div className='contentArea'>

            <div className='AllContent'>

                <CateTopCard />

                <div className='messCont'>

                  {categories.map((cat, index) => (
    <TableCard
        key={cat.id}
        title={cat.title}
        subtitle={cat.description || cat.subtitle} 
        count={cat.Project_Numbers}
        date={formatDate(cat.created_at)}
        variant={index % 2 === 0 ? "transparent" : "grey"}
        // Pass the color with transparency
        customBg={cat.color ? `${cat.color}20` : null} 
        icons={[editFill, prevFill, binFill]}
    />
))}
                </div>

                <h6>Showing All 5 Categories</h6>


            </div>

        </div>

    </section>
    
    <Footer />
  
    </> );
}
 
export default Categories;