import React, { Component } from 'react';
import './ProjectEdit.css'
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import LanguageToggle from '../Components/LanguageToggle';


const ProjectEdit = () => {
    return ( <>
    
    <header>
        <Nav pageTitle="Project Edit" />
    </header>
    
     <section className='MainArea'>

        <TheSideBar />

        <div className='contentArea'>

            <div className='AllContent'>

                <LanguageToggle />
                
            </div>

        </div>

    </section>
    
    
    <Footer />
    
    
    
    </> );
}
 
export default ProjectEdit;