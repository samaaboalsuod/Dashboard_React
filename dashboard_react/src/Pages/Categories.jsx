import React, { Component, useEffect, useState  } from 'react';
import { supabase } from '../Supabase';
import './Messages.css'

import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import CateTopCard from '../Components/CateTopCard';
import TableCard from '../Components/TableCard ';



const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [systemIcons, setSystemIcons] = useState([]);

    const getCategories = async () => {
        // Fetching the columns needed for TableCard
        const { data, error } = await supabase
            .from('Categories')
            .select('id, title, Project_Numbers, created_at, color, description'); 

        const { data: iconsData } = await supabase
            .from('SystemIcons')
            .select('*');
            
            if (error) console.error("Error fetching categories:", error);
            if (data) setCategories(data);
            if (iconsData) setSystemIcons(iconsData);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "No Date";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
    };

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this message?");
      
      if (confirmDelete) {
        const { error } = await supabase
          .from('Categories')
          .delete()
          .eq('id', id);
    
        if (error) {
          alert("Error deleting: " + error.message);
        } else {
          // Filter the local state so the message disappears instantly
          setCategories(prevMsg => prevMsg.filter(message => message.id !== id));
          alert("Message deleted!");
        }
      }
    };
    
    // 3. Helper to find icons
    const getIcon = (altName) => {
      const found = systemIcons.find(icon => icon.alt === altName);
      return found ? found.icon : ""; 
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
        icons={[
            getIcon("editIcon"), 
            getIcon("peviewIcon"), // Note: using the typo from your screenshot
            getIcon("deleteIcon")
          ]}
          onDelete={() => handleDelete(cat.id)}
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