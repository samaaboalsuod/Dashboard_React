import React, { Component, useState } from 'react';
import './PageTopCont.css'

import SearchBar from '../Components/SearchBar';
import Button from '../Components/Button';

import addIcon from '../Assets/addWhiteIcon.svg'
import TagButton from './TagButton';


const PageTopCont = () => {

      // 2. Define the available categories
    const categories = ["All", "Static", "Dynamic", "UI/UX Elments", "UI Development", "Graphic Design", "Photography", "3D Modeling"];
    
    // 3. Initialize state with the first category ("All") as selected
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // 4. Handler function to update state on click
    const handleTagClick = (category) => {
        setSelectedCategory(category);
        // You would also typically trigger a data fetch here
        console.log("Selected category:", category);
    };

        const handleDownload = () => {
        // Log a message or execute the actual download logic
        console.log('Download initiated!');
        // Example: logic to fetch and download a file
    };
    return (

        <div className='pageTopCont'>

            <div className='toppage'>
              <SearchBar SearchText="Search pages..." />
              <Button  BtnText="Add a new page" IconSrc={addIcon} onClick={handleDownload} />
            </div>

            <div className='tagsCont'>
                {/* 5. Map over the categories to render buttons dynamically */}
                {categories.map((category) => (
                    <TagButton 
                        key={category}
                        tagBtnTxt={category}
                        // Check if the current category is the selected one
                        isSelected={category === selectedCategory}
                        // Pass the handler to update the state
                        onClick={() => handleTagClick(category)} 
                    />
                ))}
            </div>
        </div>

      );
}
 
export default PageTopCont;