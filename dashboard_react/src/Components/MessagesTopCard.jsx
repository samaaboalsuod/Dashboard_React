import React, { Component } from 'react';
import './MessagesTopCard.css'
import TagButton from './TagButton';
import SearchBar from './SearchBar';

const MessagesTopCard = () => {
    return ( <>
    
    <div className='MessagesTopCard'>

        <div className='tagsCont'>
            <TagButton tagBtnTxt="All" />
            <TagButton tagBtnTxt="Unread" />
            <TagButton tagBtnTxt="Important" />
            <TagButton tagBtnTxt="Drafts" />
            <TagButton tagBtnTxt="Trash" />
        </div>

        <SearchBar SearchText="Search messages..." />

    </div>
    
    
    
    
    </> );
}
 
export default MessagesTopCard;