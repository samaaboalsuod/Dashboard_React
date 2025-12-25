import React from 'react';
import './CateTopCard.css';
import SearchBar from './SearchBar';
import Button from './Button';
import addIcon from '../Assets/addWhiteIcon.svg';

const CateTopCard = ({ onAddClick }) => {
    // Note: We removed the internal Supabase logic because 
    // the Add/Update action now happens inside the Modal in Categories.jsx

    return ( 
        <div className='cateTopCont'>
            {/* SearchBar remains for filtering the list */}
            <SearchBar 
                SearchText="Search categories..." 
            />

            {/* The button now simply triggers the handleAddNewClick from the parent */}
            <Button  
                BtnText="Add a new category" 
                IconSrc={addIcon} 
                onClick={onAddClick}
            />
        </div>
    );
}

export default CateTopCard;