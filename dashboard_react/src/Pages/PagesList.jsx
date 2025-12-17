import React, { Component } from 'react';
import './PagesList.css'

import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import SearchBar from '../Components/SearchBar';
import Button from '../Components/Button';

import addIcon from '../Assets/addWhiteIcon.svg'
import PageTopCont from '../Components/PageTopCont';



const PagesList = () => {

    const handleDownload = () => {
        // Log a message or execute the actual download logic
        console.log('Download initiated!');
        // Example: logic to fetch and download a file
    };

    return ( <>
    
    <header>
        <Nav pageTitle="Pages List" />
    </header>
    
        <section className='MainArea'>

        <TheSideBar />

        <div className='contentArea'>

            <div className='AllContent'>

                {/* <div className='cateTopCont'>

                    <SearchBar SearchText="Search pages..." />

                    <Button  BtnText="Add a new page" IconSrc={addIcon} onClick={handleDownload} />

                </div> */}

                <PageTopCont />



            </div>

        </div>

    </section>
    
        <Footer />

    </> );
}
 
export default PagesList;