// MessagesTopCard.jsx

import React, { useState } from 'react'; // 1. Import useState
import './MessagesTopCard.css'
import TagButton from './TagButton';
import SearchBar from './SearchBar';

const MessagesTopCard = () => {
    
    // 2. Define the available categories
    const categories = ["All", "Unread", "Important", "Drafts", "Trash"];
    
    // 3. Initialize state with the first category ("All") as selected
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // 4. Handler function to update state on click
    const handleTagClick = (category) => {
        setSelectedCategory(category);
        // You would also typically trigger a data fetch here
        console.log("Selected category:", category);
    };

    return ( 
        <div className='MessagesTopCard'>

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

            <SearchBar SearchText="Search messages..." />

        </div>
    );
}
 
export default MessagesTopCard;