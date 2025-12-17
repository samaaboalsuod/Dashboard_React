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
import Button from '../Components/Button';
import NavIcon from '../Components/NavIcon';

import editFill from '../Assets/editWhite.svg'
import uploadIcon from '../Assets/uploadIcon.svg'



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
                    <div className='shortInputsCont'>

                  <BigCardTitle title="Basic Info" />
                  <NavIcon  navIcon={editFill} /> 
                    </div>

                  <div className='shortInputsCont'>

                    <ShortInput title="Project Title" placeholder="project Name" />
                    <ShortInput title="Project Title" placeholder="project Name" />

                  </div>

                  <RichText title="Project overview" placeholder="More about the project..." maxChars={500} />

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

                <MediaUpload title="Hero Media" icon={uploadIcon} centerText="Upload a Photo / Video" helperText="5 MB max" />
                <MediaUpload title="Gallery Media" icon={uploadIcon} centerText="Upload a Photo / Video" helperText="20 MB max" />

                <Button BtnText="Save Changes" />

                  </div>

                </div>

                <div className='sec1'>

                  <div className='column'>
                    <div className='shortInputsCont'>

                  <BigCardTitle title="SEO Optimization" />
                  <NavIcon  navIcon={editFill} /> 
                    </div>

                  <div className='shortInputsCont'>

                    <ShortInput title="Page Title" placeholder="page title" />
                    <ShortInput title="Page Slug" placeholder="page slug" />

                  </div>

                  <RichText title="Meta Description" placeholder="write mete description..." maxChars={150} />

                <Button BtnText="Save Changes" />

                  </div>

                </div>


            </div>

        </div>

    </section>
    
    
    <Footer />
    
    
    
    </> );
}
 
export default ProjectEdit;