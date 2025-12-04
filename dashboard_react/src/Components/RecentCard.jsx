import React, { Component } from 'react';
import './RecentCard.css'


import binFill from '../Assets/binFill.svg'
import prevFill from '../Assets/prevFill.svg'
import editFill from '../Assets/editFill.svg'

import IconImg from './iconImg';


const RecentCard = (props) => {
    return ( 
        <div className='recentCardCont'>

            <img className='recImg' src={props.image} alt="" />

            <div className='recentData'>

                <h4>{props.title}</h4>
                <h6>{props.category}</h6>
                <p>{props.time}</p>

                <div className='iconRow'>
                    <IconImg src={binFill} />
                    <IconImg src={prevFill} />
                    <IconImg src={editFill} />
                </div>

            </div>

        </div>
     );
}
 
export default RecentCard;