import React, { Component } from 'react';
import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import CateTopCard from '../Components/CateTopCard';


const Categories = () => {
    return ( <>
    
     <header>
        <Nav pageTitle="Categories" />
    </header>

    <section className='MainArea'>

        <TheSideBar />

        <div className='contentArea'>

            <div className='AllContent'>

                <CateTopCard />


            </div>

        </div>

    </section>
    
    <Footer />
  
    </> );
}
 
export default Categories;