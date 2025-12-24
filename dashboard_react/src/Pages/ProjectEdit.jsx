import React, { Component,useState } from 'react';
import { supabase } from '../Supabase';
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

import modelingIcon from '../Assets/modelingIcon.svg'







const ProjectEdit = () => {

  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [tools, setTools] = useState("");
  const [heroMedia, setHeroMedia] = useState(null); // For "Cover_Media"
  const [galleryMedia, setGalleryMedia] = useState(null);// For "images"
  const [pageTitle, setPageTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [f1Name, setF1Name] = useState("");
  const [f1Desc, setF1Desc] = useState("");
  const [f1Media, setF1Media] = useState(null);
  const [f2Name, setF2Name] = useState("");
  const [f2Desc, setF2Desc] = useState("");
  const [f2Media, setF2Media] = useState(null);
  const [colors, setColors] = useState([]);
  const [font1Name, setFont1Name] = useState("");
  const [font1Alphabet, setFont1Alphabet] = useState("");
  const [font2Name, setFont2Name] = useState("");
  const [font2Alphabet, setFont2Alphabet] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [goalStatement, setGoalStatement] = useState("");
  const [prototypeVideo, setPrototypeVideo] = useState(null);
  const [shutterSpeed, setShutterSpeed] = useState("");
  const [aperture, setAperture] = useState("");
  const [iso, setIso] = useState("");
  const [location, setLocation] = useState("");

  

// async function handleCreateProject() {
//   const { data, error } = await supabase
//     .from("Projects")
//     .insert([
//       { 
//         title: title,
//         Role: role,
//         Discreption: description,
//         category: category,
//         date: date,
//         Duration: duration,
//         tools: tools,
//         pageTitle: pageTitle,
//         slug: slug,
//         metaDescription: metaDescription,

//         Colors: colors, 
//         Features: [
//           {
//             Name: f1Name,
//             Discreption: f1Desc,
//             Img: f1Media ? f1Media.name : "",
//             ImgAlt: f1Name
//           },
//           {
//             Name: f2Name,
//             Discreption: f2Desc,
//             Img: f2Media ? f2Media.name : "",
//             ImgAlt: f2Name
//           }
//         ],
//         Cover_Media: heroMedia ? heroMedia.name : "",
//         images: galleryMedia ? { name: galleryMedia.name } : null,

//         Fonts_Display: [
//           {
//             fontName: font1Name,
//             alphabet: font1Alphabet
//           },
//           {
//             fontName: font2Name,
//             alphabet: font2Alphabet
//           }
//         ],
//         Toggles: [
//           {
//             toggle: "Problem Statement",
//             discreption: problemStatement 
//           },
//           {
//             toggle: "Goal Statement",
//             discreption: goalStatement
//           }
//         ],
//         video: prototypeVideo ? prototypeVideo.name : "",
//       }
//     ]);

//   if (error) {
//     console.error("Error saving project:", error.message);
//   } else {
//     alert("Project saved successfully with colors!");
//   }
// }

async function handleCreateProject() {
    // 1. Prepare Photography Object
    const photographyData = {
      shutterSpeed,
      aperture,
      iso,
      location
    };

    // 2. Prepare Feature/Font/Toggle Data (Your existing logic)
    const featuresData = [
      { Name: f1Name, Discreption: f1Desc, Img: f1Media?.name || "", ImgAlt: f1Name },
      { Name: f2Name, Discreption: f2Desc, Img: f2Media?.name || "", ImgAlt: f2Name }
    ].filter(f => f.Name.trim() !== "");

    const fontsData = [
      { fontName: font1Name, alphabet: font1Alphabet },
      { fontName: font2Name, alphabet: font2Alphabet }
    ].filter(f => f.fontName.trim() !== "");

    const togglesData = [
      { toggle: "Problem Statement", discreption: problemStatement },
      { toggle: "Goal Statement", discreption: goalStatement }
    ].filter(t => t.discreption.trim() !== "");

    // 3. Final Insert
    const { data, error } = await supabase
      .from("Projects")
      .insert([
        { 
          title,
          category,
          date,
          tools,
          slug,
          pageTitle,
          metaDescription,
          Role: role,
          Duration: duration,
          Discreption: description,
          Cover_Media: heroMedia?.name || "",
          images: galleryMedia ? { name: galleryMedia.name } : null,
          video: prototypeVideo?.name || "",
          Colors: colors.length > 0 ? colors : null,
          Features: featuresData,
          Fonts_Display: fontsData,
          Toggles: togglesData,
          // ADD THIS LINE TO SAVE PHOTOGRAPHY DATA:
          Photography_Specs: shutterSpeed ? photographyData : null 
        }
      ]);

    if (error) console.error("Error:", error.message);
    else alert("Project saved successfully!");
  }


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

<div className='shortInputsCont'>
  <ShortInput 
    title="Project Title" 
    placeholder="project Name" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)} 
  />
  <ShortInput 
    title="My Role" 
    placeholder="My Role" 
    value={role} 
    onChange={(e) => setRole(e.target.value)} 
  />
</div>

                  </div>

                  <RichText 
  title="Project overview" 
  placeholder="More about the project..." 
  maxChars={500} 
  value={description}
  onChange={(content) => setDescription(content)} 
/>

<SelectInput 
  title="Project Category" 
  placeholder="Select category"
  options={[
    "UI/UX Design",
    "Front End Development",
    "Graphic Design",
    "3D Modeling",
    "Photography"
  ]}
  value={category} // Link to state
  onChange={(val) => setCategory(val)} // Update state on click
/>

                  <div className='shortInputsCont'>

                    <ShortInput title="Date" placeholder="--/--/----" value={date} onChange={(e) => setDate(e.target.value)} />
                    <ShortInput title="Duration" placeholder="eg. 2 weeks" value={duration} onChange={(e) => setDuration(e.target.value)} />

                  </div>

<SelectInput 
  title="Tools used" 
  placeholder="Select all right"
  options={[
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
    "Blinder"
  ]}
  value={tools}
  onChange={(val) => setTools(val)} 
/>

<MediaUpload 
  title="Hero Media" 
  icon={uploadIcon} 
  centerText="Upload a Photo / Video" 
  helperText="5 MB max" 
  onChange={(e) => setHeroMedia(e.target.files[0])} 
/>

<MediaUpload 
  title="Gallery Media" 
  icon={uploadIcon} 
  centerText="Upload a Photo / Video" 
  helperText="20 MB max" 
  onChange={(e) => setGalleryMedia(e.target.files[0])} 
/>

                <Button BtnText="Save Changes" onClick={handleCreateProject} />

                  </div>

                </div>

                <div className='sec1'>

                  <div className='column'>
                    <div className='shortInputsCont'>

                  <BigCardTitle title="SEO Optimization" />
                  <NavIcon  navIcon={editFill} /> 
                    </div>

                  <div className='shortInputsCont'>

    <ShortInput 
        title="Page Title" 
        placeholder="page title" 
        value={pageTitle}
        onChange={(e) => setPageTitle(e.target.value)}
    />
    <ShortInput 
        title="Page Slug" 
        placeholder="page slug" 
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
    />

                  </div>

                  <RichText 
    title="Meta Description" 
    placeholder="write mete description..." 
    maxChars={150} 
    value={metaDescription}
    onChange={(content) => setMetaDescription(content)} 
/>

               <Button BtnText="Save Changes" onClick={handleCreateProject} />

                  </div>

                </div>

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="UI/UX Projects" />
                    <NavIcon  navIcon={editFill} /> 
                  </div>

{/* --- FEATURE 1 SECTION --- */}
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
      <ShortInput 
        title="Feature Name" 
        placeholder="feature name" 
        value={f1Name}
        onChange={(e) => setF1Name(e.target.value)}
      />
      <RichText 
        title="Description" 
        placeholder="More about this feature......" 
        maxChars={150} 
        value={f1Desc}
        onChange={(content) => setF1Desc(content)}
      />
    </div>

    <div className='halfCol'>
      <MediaUpload 
        title="Feature Media" 
        icon={uploadIcon} 
        centerText="Upload a Photo / Video" 
        helperText="5 MB max" 
        onChange={(e) => setF1Media(e.target.files[0])} 
      />
    </div>
  </div>
</div>

{/* --- FEATURE 2 SECTION --- */}
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
      <ShortInput 
        title="Feature Name" 
        placeholder="feature name" 
        value={f2Name}
        onChange={(e) => setF2Name(e.target.value)}
      />
      <RichText 
        title="Description" 
        placeholder="More about this feature......" 
        maxChars={150} 
        value={f2Desc}
        onChange={(content) => setF2Desc(content)}
      />
    </div>

    <div className='halfCol'>
      <MediaUpload 
        title="Feature Media" 
        icon={uploadIcon} 
        centerText="Upload a Photo / Video" 
        helperText="5 MB max" 
        onChange={(e) => setF2Media(e.target.files[0])}
      />
    </div>
  </div>
</div>

{/* Visual Add Button */}
<StrokeBut strokeButIcon={addIcon} strokeButText="Add a new Feature" />


<TagInput 
  title="Project Colors" 
  placeholderText="Add a color" 
  maxTags={6} 
  value={colors}
  onChange={setColors}
/>

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
<ShortInput 
    title="Font 1 Name" 
    placeholder="font 1 name" 
    value={font1Name}
    onChange={(e) => setFont1Name(e.target.value)}
/>
<RichText 
    title="Alphabet" 
    placeholder="Write the Alphapet" 
    maxChars={60} 
    value={font1Alphabet}
    onChange={(content) => setFont1Alphabet(content)}
/>
                      </div>

                      <div className='halfCol'>
                        <ShortInput 
    title="Font 2 Name" 
    placeholder="font 2 name" 
    value={font2Name}
    onChange={(e) => setFont2Name(e.target.value)}
/>
<RichText 
    title="Alphabet" 
    placeholder="Write the Alphapet" 
    maxChars={60} 
    value={font2Alphabet}
    onChange={(content) => setFont2Alphabet(content)}
/>
                      </div>


                    </div>

                  </div>

                  <div className='sec1'>

                      <div className='shortInputsCont'>

                      <BigCardTitle title="Problem & Goal Statement" />
                      <div className='iconRow'>
                        <IconImg src={binFill} />
                        <IconImg src={prevFill} />
                      </div>

                    </div>
                      
                    <div className='featureCont'>


                      <div className='halfCol'>
                        <RichText 
  title="Problem statement" 
  placeholder="Write the problem statement" 
  maxChars={200} 
  value={problemStatement}
  onChange={(content) => setProblemStatement(content)}
/>
                      </div>

                      <div className='halfCol'>
                        <RichText 
  title="Goal Statement" 
  placeholder="Write the goal statement" 
  maxChars={200} 
  value={goalStatement}
  onChange={(content) => setGoalStatement(content)}
/>
                      </div>


                    </div>

                  </div>

<MediaUpload 
  title="Prototype Video" 
  icon={videoIcon} 
  centerText="Upload a Video" 
  helperText="5 MB max" 
  onChange={(e) => setPrototypeVideo(e.target.files[0])} 
/>

                    <Button BtnText="Save Changes" onClick={handleCreateProject} />

                    
                </div>

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="UI Development Projects" />
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
<ShortInput 
  title="Feature Name" 
  placeholder="feature name" 
  value={f1Name} 
  onChange={(e) => setF1Name(e.target.value)} 
/>
<RichText 
  title="Description" 
  placeholder="More about this feature......" 
  maxChars={150} 
  value={f1Desc}
  onChange={(content) => setF1Desc(content)}
/>
                      </div>

                      <div className='halfCol'>

<MediaUpload 
  title="Feature Media" 
  icon={uploadIcon} 
  centerText="Upload a Photo / Video" 
  helperText="5 MB max" 
  onChange={(e) => setF1Media(e.target.files[0])}
/>
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
<ShortInput 
  title="Feature Name" 
  placeholder="feature name" 
  value={f2Name}
  onChange={(e) => setF2Name(e.target.value)}
/>
<RichText 
  title="Description" 
  placeholder="More about this feature......" 
  maxChars={150} 
  value={f2Desc}
  onChange={(content) => setF2Desc(content)}
/>
                      </div>

                      <div className='halfCol'>
<MediaUpload 
  title="Feature Media" 
  icon={uploadIcon} 
  centerText="Upload a Photo / Video" 
  helperText="5 MB max" 
  onChange={(e) => setF2Media(e.target.files[0])}
/>
                      </div>


                    </div>

                    </div>


                  <StrokeBut strokeButIcon={addIcon} strokeButText="Add a new Feature" />

<TagInput 
  title="Project Colors" 
  placeholderText="Add a color" 
  maxTags={6} 
  value={colors}
  onChange={setColors}
/>

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
<ShortInput 
  title="Font 1 Name" 
  placeholder="font 1 name" 
  value={font1Name}
  onChange={(e) => setFont1Name(e.target.value)}
/>
<RichText 
  title="Alphabet" 
  placeholder="Write the Alphapet" 
  maxChars={60} 
  value={font1Alphabet}
  onChange={(content) => setFont1Alphabet(content)}
/>
                      </div>

                      <div className='halfCol'>
<ShortInput 
  title="Font 2 Name" 
  placeholder="font 2 name" 
  value={font2Name}
  onChange={(e) => setFont2Name(e.target.value)}
/>
<RichText 
  title="Alphabet" 
  placeholder="Write the Alphapet" 
  maxChars={60} 
  value={font2Alphabet}
  onChange={(content) => setFont2Alphabet(content)}
/>
                      </div>


                    </div>

                  </div>


<MediaUpload 
  title="Prototype Video" 
  icon={videoIcon} 
  centerText="Upload a Video" 
  helperText="5 MB max" 
  onChange={(e) => setPrototypeVideo(e.target.files[0])}
/>

                    <Button BtnText="Save Changes" onClick={handleCreateProject} />

                    
                </div>

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="Graphic Design Projects" />
                    <NavIcon  navIcon={editFill} /> 
                  </div>

<SelectInput 
  title="Project Type" 
  placeholder="Select a type"
  options={[
    "Branding",
    "Logo Design",
    "Painting"
  ]}
  value={category} // Linked to your category state
  onChange={(value) => setCategory(value)} // Updates state on change
/>

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
      <ShortInput 
        title="Feature Name" 
        placeholder="feature name" 
        value={f1Name}
        onChange={(e) => setF1Name(e.target.value)}
      />
      <RichText 
        title="Description" 
        placeholder="More about this feature......" 
        maxChars={150} 
        value={f1Desc}
        onChange={(content) => setF1Desc(content)}
      />
    </div>

    <div className='halfCol'>
      <MediaUpload 
        title="Feature Media" 
        icon={uploadIcon} 
        centerText="Upload a Photo / Video" 
        helperText="5 MB max" 
        onChange={(e) => setF1Media(e.target.files[0])}
      />
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
      <ShortInput 
        title="Feature Name" 
        placeholder="feature name" 
        value={f2Name}
        onChange={(e) => setF2Name(e.target.value)}
      />
      <RichText 
        title="Description" 
        placeholder="More about this feature......" 
        maxChars={150} 
        value={f2Desc}
        onChange={(content) => setF2Desc(content)}
      />
    </div>

    <div className='halfCol'>
      <MediaUpload 
        title="Feature Media" 
        icon={uploadIcon} 
        centerText="Upload a Photo / Video" 
        helperText="5 MB max" 
        onChange={(e) => setF2Media(e.target.files[0])}
      />
    </div>
  </div>
</div>


                  <StrokeBut strokeButIcon={addIcon} strokeButText="Add a new Feature" />

<TagInput 
  title="Project Colors" 
  placeholderText="Add a color" 
  maxTags={6} 
  value={colors}
  onChange={setColors}
/>

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
    <ShortInput 
      title="Font 1 Name" 
      placeholder="font 1 name" 
      value={font1Name}
      onChange={(e) => setFont1Name(e.target.value)}
    />
    <RichText 
      title="Alphabet" 
      placeholder="Write the Alphapet" 
      maxChars={60} 
      value={font1Alphabet}
      onChange={(content) => setFont1Alphabet(content)}
    />
  </div>

  <div className='halfCol'>
    <ShortInput 
      title="Font 2 Name" 
      placeholder="font 2 name" 
      value={font2Name}
      onChange={(e) => setFont2Name(e.target.value)}
    />
    <RichText 
      title="Alphabet" 
      placeholder="Write the Alphapet" 
      maxChars={60} 
      value={font2Alphabet}
      onChange={(content) => setFont2Alphabet(content)}
    />
  </div>
</div>

                  </div>


                    <Button 
  BtnText="Save Changes" 
  onClick={handleCreateProject} 
/>

                    
                </div>

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="Photography Projects" />
                    <NavIcon  navIcon={editFill} /> 
                  </div>

                  <div className='column'>

<SelectInput 
  title="Project Type" 
  placeholder="Select a type"
  options={[
    "Fast Shutter Speed",
    "Slow Shutter Speed",
    "Shallow Depth of Field",
    "Deep Depth of Field",
    "Night Shot",
    "Painting with Light"
  ]}
  value={category} // Linked to your existing const [category, setCategory]
  onChange={(value) => setCategory(value)} 
/>

                  <div className='shortInputsCont'>

                       <ShortInput 
    title="Shutter Speed" 
    value={shutterSpeed} 
    onChange={(e) => setShutterSpeed(e.target.value)} 
  />
  <ShortInput 
    title="Aperture Size" 
    value={aperture} 
    onChange={(e) => setAperture(e.target.value)} 
  />

                  </div>

                  <div className='shortInputsCont'>

                      <ShortInput 
    title="ISO Value" 
    value={iso} 
    onChange={(e) => setIso(e.target.value)} 
  />
  <ShortInput 
    title="Location" 
    value={location} 
    onChange={(e) => setLocation(e.target.value)} 
  />

                  </div>

                  </div>
                    <Button BtnText="Save Changes" onClick={handleCreateProject} />
                    
                </div>

                <div className='sec1'>

                  <div className='shortInputsCont'>
                    <BigCardTitle title="3D Modeling Projects" />
                    <NavIcon  navIcon={editFill} /> 
                  </div>

                      <MediaUpload 
  title="Feature Media" 
  icon={modelingIcon} 
  centerText="Upload a 3D Model" 
  helperText="5 MB max" 
  // This connects it to your existing video state
  onChange={(e) => setPrototypeVideo(e.target.files[0])} 
/>

                    <Button BtnText="Save Changes" onClick={handleCreateProject} />

                    
                </div>


            </div>

        </div>

    </section>
    
    
    <Footer />
    
    
    
    </> );
}
 
export default ProjectEdit;