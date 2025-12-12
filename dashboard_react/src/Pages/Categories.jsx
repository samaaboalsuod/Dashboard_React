import React, { Component } from 'react';
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

                    <TableCard
                      title="UI/UX Design"
                      subtitle="Website, web application and all screens design projects"
                      count={12}
                      date="21/10/2025"
                      variant="grey"
                      icons={[editFill, prevFill, binFill]}
                    />

                    <TableCard
                      title="Front End Desing"
                      subtitle="Website design implementation projects"
                      count={4}
                      date="21/10/2025"
                      variant="transparent"
                      icons={[editFill, prevFill, binFill]}
                    />

                    <TableCard
                      title="Graphic Design"
                      subtitle="Digital illustrations and Branding projects"
                      count={5}
                      date="21/10/2025"
                      variant="grey"
                      icons={[editFill, prevFill, binFill]}
                    />

                    <TableCard
                      title="Photography"
                      subtitle="Professionally photos by camera projects"
                      count={9}
                      date="21/10/2025"
                      variant="transparent"
                      icons={[editFill, prevFill, binFill]}
                    />

                    <TableCard
                      title="3D Modeling"
                      subtitle="3D models created using 3dMax or Blender"
                      count={3}
                      date="21/10/2025"
                      variant="grey"
                      icons={[editFill, prevFill, binFill]}
                    />
                </div>


            </div>

        </div>

    </section>
    
    <Footer />
  
    </> );
}
 
export default Categories;