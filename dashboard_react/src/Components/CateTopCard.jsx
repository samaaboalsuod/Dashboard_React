import React, { Component } from 'react';
import './CateTopCard.css'
import SearchBar from './SearchBar';
import Button from './Button';

import addIcon from '../Assets/addWhiteIcon.svg'

const CateTopCard = () => {
    const handleDownload = () => {
        // Log a message or execute the actual download logic
        console.log('Download initiated!');
        // Example: logic to fetch and download a file
    };
    return ( 
        <div className='cateTopCont'>

            <SearchBar SearchText="Search categories..." />

            <Button  BtnText="Add a new category" IconSrc={addIcon} onClick={handleDownload}
/>
        </div>
        
     );
}
 
export default CateTopCard;