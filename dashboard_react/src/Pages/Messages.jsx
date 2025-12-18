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






const Messages = () => {

        const [loading, setLoading] = useState(true)
        const [msg, setMsg] = useState([])
    
        useEffect(() => {
    
            async function callMsgAPI (){
                const res = await supabase.from('Messages').select('*')
                setMsg(res.data);
                setLoading(false);
                // console.log(res);
            }
            callMsgAPI();
        },[]);
    if (loading) return <p>Loading...</p>;

    return ( <>
    
    
    <header>
        <Nav pageTitle="Messages" />
    </header>

    <section className='MainArea'>

        <div className='sideBar'>

            <SideBar barIcon={DashIcon} barAction="Dashboard" isActive={true} />
            <SideBar  barIcon={MailIcon}  barAction="E-mail" isActive={false} />
            <SideBar  barIcon={ProjectIcon}  barAction="Projects" isActive={false} />
            <SideBar  barIcon={PagesIcon}  barAction="Pages" isActive={false} />
            <SideBar  barIcon={CalendarIcon}  barAction="Calendar" isActive={false} />
            <SideBar  barIcon={profileIcon}  barAction="Profile" isActive={false} />
            <SideBar  barIcon={MessageIcon}  barAction="Messages" isActive={false} />
            <SideBar  barIcon={SettingIcon}  barAction="Settings" isActive={false} />


        </div>

        <div className='contentArea'>


            <div className='AllContent'>

                <MessagesTopCard />




      <div className='messCont'>

{msg.map((item, index) => (
        <TableCard
            key={item.id}
            title={item.senderName}
            subtitle={item.senderMail}
            middleText={item.subject || (item.body ? item.body.substring(0, 30) + "..." : "No Subject")} 
            date={item.date ? new Date(item.date).toLocaleDateString('en-GB') : "No Date"}
            
            /* DYNAMIC VARIANT LOGIC */
            /* This checks if the index is even or odd */
            variant={index % 2 === 0 ? "grey" : "transparent"}
            
            status={item.subject ? "Inquiry" : "Message"}
            icons={[editFill, prevFill, binFill]}
        />
    ))}

      </div>

      <StrokeBut   strokeButText="Load More Messages" />



            </div>

        </div>

    </section>
    
    <Footer />
    
    
    
    
    
    </> );
}
 
export default Messages;