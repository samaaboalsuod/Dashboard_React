import React, { Component } from 'react';
import './PagesList.css'

import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';

import PageTopCont from '../Components/PageTopCont';
import RecentCard from '../Components/RecentCard';

import placeHoldImg from '../Assets/placeHoldImg.jpg';




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
                
                <PageTopCont />

                <div className='overCardsCont'>


                 <RecentCard
  image={placeHoldImg}
  title="Ummah Game App"
  category="UI/UX Design"
  categoryColor="#EAD7F5"
  slug="/ummah_game_app"
  projectState="Dynamic"
  publishState="Published"
  time="03/04/2025"
/>

                 <RecentCard
  image={placeHoldImg}
  title="Ummah Game App"
  category="UI/UX Design"
  categoryColor="#EAD7F5"
  slug="/ummah_game_app"
  projectState="Dynamic"
  publishState="Published"
  time="03/04/2025"
/>

                 <RecentCard
  image={placeHoldImg}
  title="Ummah Game App"
  category="UI/UX Design"
  categoryColor="#EAD7F5"
  slug="/ummah_game_app"
  projectState="Dynamic"
  publishState="Published"
  time="03/04/2025"
/>

                 <RecentCard
  image={placeHoldImg}
  title="Ummah Game App"
  category="UI/UX Design"
  categoryColor="#EAD7F5"
  slug="/ummah_game_app"
  projectState="Dynamic"
  publishState="Published"
  time="03/04/2025"
/>
                </div>




            </div>

        </div>

    </section>
    
        <Footer />

    </> );
}
 
export default PagesList;