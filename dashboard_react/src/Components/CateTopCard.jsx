import React, { useState, useEffect } from 'react'; // Added useState & useEffect
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';
import './CateTopCard.css';
import SearchBar from './SearchBar';
import Button from './Button';
import addIcon from '../Assets/addWhiteIcon.svg';

const CateTopCard = ({ initialData, onUpdate }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    // 1. Logic for the Button
    const handleAction = async () => {
        // If we have initialData, it means we are EDITING
        if (initialData?.id) {
            const { error } = await supabase
                .from('Categories')
                .update({ title: searchTerm }) // Updates title with whatever is in the search bar
                .eq('id', initialData.id);

            if (!error) {
                alert("Category Updated!");
                onUpdate(); // Refresh the list in Categories.jsx
                navigate('/Categories'); // Reset URL (removes the ID)
                setSearchTerm(""); // Clear the bar
            } else {
                alert("Error: " + error.message);
            }
        } else {
            // If no initialData, it's the original ADD logic
            const { error } = await supabase
                .from('Categories')
                .insert([{ title: searchTerm }]);

            if (!error) {
                alert("Category Added!");
                onUpdate();
                setSearchTerm("");
            }
        }
    };

    // 2. Sync the SearchBar with the Category name when you click Edit
    useEffect(() => {
        if (initialData) {
            setSearchTerm(initialData.title || "");
        } else {
            setSearchTerm("");
        }
    }, [initialData]);

    return ( 
        <div className='cateTopCont'>
            {/* We pass searchTerm and setSearchTerm so the bar shows the text we want to edit */}
            <SearchBar 
                SearchText="Search or Edit Category..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />

            <Button  
                BtnText={initialData?.id ? "Save Changes" : "Add a new category"} 
                IconSrc={addIcon} 
                onClick={handleAction}
            />
        </div>
    );
}

export default CateTopCard;