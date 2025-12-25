import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';

import './Messages.css'
import './Home.css'

import Nav from '../Components/Nav';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import TableCard from '../Components/TableCard ';
import MessagesTopCard from '../Components/MessagesTopCard';
import StrokeBut from '../Components/StrokeBut';
import TheSideBar from '../Components/TheSideBar';




const Messages = () => {

const [loading, setLoading] = useState(true);
const [msg, setMsg] = useState([]);
const [systemIcons, setSystemIcons] = useState([]);

// 1. useEffect ONLY handles the initial data fetching
useEffect(() => {
  async function callMsgAPI() {
    const { data, error } = await supabase
      .from('Messages')
      .select('*')
      .order('id', { ascending: false });

    const { data: iconsData } = await supabase
      .from('SystemIcons')
      .select('*');

    if (data) setMsg(data);
    if (iconsData) setSystemIcons(iconsData);
    
    setLoading(false);
  }

  callMsgAPI();
}, []); // No handleDelete here!

// 2. handleDelete lives OUTSIDE the useEffect so the UI can use it
const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this message?");
  
  if (confirmDelete) {
    const { error } = await supabase
      .from('Messages')
      .delete()
      .eq('id', id);

    if (error) {
      alert("Error deleting: " + error.message);
    } else {
      // Filter the local state so the message disappears instantly
      setMsg(prevMsg => prevMsg.filter(message => message.id !== id));
      alert("Message deleted!");
    }
  }
};

// 3. Helper to find icons
const getIcon = (altName) => {
  const found = systemIcons.find(icon => icon.alt === altName);
  return found ? found.icon : ""; 
};

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
          date={displayDate}
          variant={currentStatus === "New" ? "grey" : "transparent"}
          status={currentStatus} 
          // 4. Use the helper instead of local imports
          icons={[
            getIcon("editIcon"), 
            getIcon("peviewIcon"), // Note: using the typo from your screenshot
            getIcon("deleteIcon")
          ]}
          onDelete={() => handleDelete(item.id)}
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