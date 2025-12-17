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
import IconImg from '../Components/iconImg';
import StrokeBut from '../Components/StrokeBut';
import TagInput from '../Components/TagInput';

import editFill from '../Assets/editWhite.svg'
import uploadIcon from '../Assets/uploadIcon.svg'

import binFill from '../Assets/binFill.svg'
import prevFill from '../Assets/prevFill.svg'
import addIcon from '../Assets/add.svg'
import videoIcon from '../Assets/videoIcon.svg'





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

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="UI/UX Projects" />
                    <NavIcon  navIcon={editFill} /> 
                  </div>

                  <div className='sec1'>

                    <div className='shortInputsCont'>

                      <BigCardTitle title="Feature 1" />
                      <div className='iconRow'>
                        <IconImg src={binFill} />
                        <IconImg src={prevFill} />
                      </div>

                    </div>

                    <div className='featureCont'>

                      <div className='halfCol'>
                        <ShortInput title="Feature Name" placeholder="feature name" />
                        <RichText title="Description" placeholder="More about this feature......" maxChars={150} />
                      </div>

                      <div className='halfCol'>
                        <MediaUpload title="Feature Media" icon={uploadIcon} centerText="Upload a Photo / Video" helperText="5 MB max" />
                      </div>



                    </div>
                    
                  </div>

                    <div className='sec1'>

                      <div className='shortInputsCont'>

                      <BigCardTitle title="Feature 2" />
                      <div className='iconRow'>
                        <IconImg src={binFill} />
                        <IconImg src={prevFill} />
                      </div>

                    </div>
                      
                    <div className='featureCont'>

                      <div className='halfCol'>
                        <ShortInput title="Feature Name" placeholder="feature name" />
                        <RichText title="Description" placeholder="More about this feature......" maxChars={150} />
                      </div>

                      <div className='halfCol'>
                        <MediaUpload title="Feature Media" icon={uploadIcon} centerText="Upload a Photo / Video" helperText="5 MB max" />
                      </div>


                    </div>

                    </div>


                  <StrokeBut strokeButIcon={addIcon} strokeButText="Add a new Feature" />

                  <TagInput title="Project Colors" placeholderText="Add a color" maxTags={6} />

                  <div className='sec1'>

                      <div className='shortInputsCont'>

                      <BigCardTitle title="Fonts" />
                      <div className='iconRow'>
                        <IconImg src={binFill} />
                        <IconImg src={prevFill} />
                      </div>

                    </div>
                      
                    <div className='featureCont'>

                      <div className='halfCol'>
                        <ShortInput title="Font 1 Name" placeholder="font 1 name" />
                        <RichText title="Alphabet" placeholder="Write the Alphapet" maxChars={60} />
                      </div>

                      <div className='halfCol'>
                        <ShortInput title="Font 2 Name" placeholder="font 2 name" />
                        <RichText title="Alphabet" placeholder="Write the Alphapet" maxChars={60} />
                      </div>


                    </div>

                  </div>

                    <MediaUpload title="Prototype Video" icon={videoIcon} centerText="Upload a Video" helperText="5 MB max" />

                    <Button BtnText="Save Changes" />

                    
                </div>


            </div>

        </div>

    </section>
    
    
    <Footer />
    
    
    
    </> );
}
 
export default ProjectEdit;