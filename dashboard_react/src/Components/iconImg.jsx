import React from 'react';
import './IconImg.css'

// Added 'onClick' and 'style' to the props
const IconImg = ({ src, alt = "", onClick, style }) => {
  return (
    <div className='strokeICon' onClick={onClick} style={style}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default IconImg;