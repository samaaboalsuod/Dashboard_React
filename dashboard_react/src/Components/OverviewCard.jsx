import React, { Component } from 'react';
import './OverviewCard.css'

const OverviewCard = ({ title, number, percentage, icon, color }) => {
  return (

    <div className="overviewCard" style={{ backgroundColor: color }}>

      <div className="leftSide">
        <h5>{title}</h5>

        <div className='numAndp'>

        <div className='number'>{number}</div>
        <p>{percentage}</p>
        
        </div>
      </div>

      <div className="rightSide">
        <img src={icon} alt={title} />
      </div>

    </div>
  );
};

export default OverviewCard;