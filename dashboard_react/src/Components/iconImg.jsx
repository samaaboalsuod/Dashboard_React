import React from 'react';
import './IconImg.css'

const IconImg = ({ src, alt = "" }) => {

  return (
    <div className='strokeICon'>

      <img src={src} alt={alt} />
      
    </div>

   )
    
}

export default IconImg;
