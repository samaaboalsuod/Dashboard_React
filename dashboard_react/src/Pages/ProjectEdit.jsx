import React, { Component } from 'react';
import './ProjectEdit.css'
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

import TheSideBar from '../Components/TheSideBar';
import LanguageToggle from '../Components/LanguageToggle';

import BigCardTitle from './../Components/BigCardTitle';
import ShortInput from '../Components/ShortInput';
import RichText from '../Components/RichText';
import SelectInput from '../Components/SelectInput';
import MediaUpload from '../Components/MediaUpload';



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
                
                <div className='sec1'>

                  <div className='column'>

                  <BigCardTitle title="Basic Info" />

                  <div className='shortInputsCont'>

                    <ShortInput title="Project Title" placeholder="project Name" />
                    <ShortInput title="Project Title" placeholder="project Name" />

                  </div>

                  <RichText title="Project overview" placeholder="More about the project..." maxChars={150} />

                <SelectInput title="Project Category" placeholder="Select category"
                  options={[
                    "E-commerce",
                    "Mobile App",
                    "Dashboard",
                    "Landing Page",
                    "Branding"
                  ]}
                />
                  <div className='shortInputsCont'>

                    <ShortInput title="Date" placeholder="--/--/----" />
                    <ShortInput title="Duration" placeholder="eg. 2 weeks" />

                  </div>

                <SelectInput title="Tools used" placeholder="Select all right"
                  options={[
                    "Figma",
                    "Adobe Illustrator",
                    "Adobe Photoshop",
                    "Adobe After Effects",
                    "Blinder"
                  ]}
                />

                <MediaUpload title="Hero Media" icon="⬆️" centerText="Upload a Photo / Video" helperText="5 MB max" />
                <MediaUpload title="Gallery Media" icon="⬆️" centerText="Upload a Photo / Video" helperText="20 MB max" />

                  </div>

                </div>


            </div>

        </div>

    </section>
    
    
    <Footer />
    
    
    
    </> );
}
 
export default ProjectEdit;