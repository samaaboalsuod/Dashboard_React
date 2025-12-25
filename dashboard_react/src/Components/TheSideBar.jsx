import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import './TheSideBar.css';

// Asset Imports
import DashIcon from '../Assets/dashIcon.svg';
import MailIcon from '../Assets/mailIcon.svg';
import PagesIcon from '../Assets/PagesIcon.svg';
import CalendarIcon from '../Assets/calIcon.svg';
import MessageIcon from '../Assets/messIcon.svg';
import SettingIcon from '../Assets/settIcon.svg';
import CateIcon from '../Assets/cateIcon.svg';

const TheSideBar = () => {
    const location = useLocation();

    // Define your menu items in an array for cleaner mapping
    const menuItems = [
        { path: "/", label: "Dashboard", icon: DashIcon },
        { path: "/PagesList", label: "Pages", icon: PagesIcon },
        { path: "/Messages", label: "E-mail", icon: MailIcon },
        { path: "/Categories", label: "Categories", icon: CateIcon },
        // { path: "/Calendar", label: "Calendar", icon: CalendarIcon },
        // { path: "/Chat", label: "Messages", icon: MessageIcon },
        { path: "/Settings", label: "Settings", icon: SettingIcon },
    ];

    return (
        <div className='sideBar'>
            {menuItems.map((item) => (
                <Link to={item.path} key={item.label}>
                    <SideBar 
                        barIcon={item.icon} 
                        barAction={item.label} 
                        isActive={location.pathname === item.path} 
                    />
                </Link>
            ))}
        </div>
    );
};

export default TheSideBar;