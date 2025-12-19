import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';

import './Messages.css'
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import TableCard from '../Components/TableCard ';

import DashIcon from '../Assets/dashIcon.svg'
import MailIcon from '../Assets/mailIcon.svg'
import ProjectIcon from '../Assets/ProjectIcon.svg'
import PagesIcon from '../Assets/PagesIcon.svg'
import CalendarIcon from '../Assets/calIcon.svg'
import profileIcon from '../Assets/proIcon.svg'
import MessageIcon from '../Assets/messIcon.svg'
import SettingIcon from '../Assets/settIcon.svg'

import binFill from '../Assets/binFill.svg'
import prevFill from '../Assets/prevFill.svg'
import editFill from '../Assets/editFill.svg'
import MessagesTopCard from '../Components/MessagesTopCard';
import StrokeBut from '../Components/StrokeBut';
import TheSideBar from '../Components/TheSideBar';






const Messages = () => {

        const [loading, setLoading] = useState(true)
        const [msg, setMsg] = useState([])

useEffect(() => {
 async function callMsgAPI() {
    const { data, error } = await supabase
        .from('Messages')
        .select('*')
        .order('id', { ascending: false });

    if (data) {
        setMsg(data);
    }
    setLoading(false);
}

  callMsgAPI();
}, []); 

if (loading) return <p>Loading...</p>;


    return ( <>
    
    
    <header>
        <Nav pageTitle="Messages" />
    </header>

    <section className='MainArea'>

      <TheSideBar />


        <div className='contentArea'>


            <div className='AllContent'>

                <MessagesTopCard />




      <div className='messCont'>

{msg.map((item) => {
    const currentStatus = item.status || "New";
    
    // FORMATTING THE DATE:
    // If the date exists, turn it into a readable string (DD/MM/YYYY)
    const displayDate = item.date 
      ? new Date(item.date).toLocaleDateString('en-GB') 
      : "Just now";

    return (
      <TableCard
        key={item.id}
        title={item.senderName}
        subtitle={item.senderMail}
        middleText={item.subject || item.body} 
        date={displayDate} // Uses the clean formatted date
        variant={currentStatus === "New" ? "grey" : "transparent"}
        status={currentStatus} 
        icons={[editFill, prevFill, binFill]}
      />
    );
  })}

      </div>

      <StrokeBut   strokeButText="Load More Messages" />



            </div>

        </div>

    </section>
    
    <Footer />
    
    
    
    
    
    </> );
}
 
export default Messages;