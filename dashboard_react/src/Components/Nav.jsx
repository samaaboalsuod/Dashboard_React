import React from 'react';
import './Nav.css';
import Logo from '../Assets/logo.svg';
import Notify from '../Assets/notifyIcon.svg';
import Preview from '../Assets/previewIcon.svg';
import Profile from '../Assets/profileIcon.svg';
import SearchBar from './SearchBar';
import NavIcon from './NavIcon';

const Nav = (props) => {
    return (
        <nav className="navbar-container">
            {/* Left Side: Logo (Name is hidden on mobile via CSS) */}
            <div className='logoPart'>
                <img className='logo' src={Logo} alt="logo" />
                <h4 className='userName'>Hi, Samaa</h4>
            </div>

            {/* Center: Page Title (Hidden on mobile via CSS) */}
            <h3 className='pageTitle'>{props.pageTitle}</h3>

            {/* Right Side: Search (Hidden on mobile) and Icons (Always visible) */}
            <div className='navHalf'>
                <div className='searchWrap'>
                    <SearchBar SearchText="What do you search for..." />
                </div>

                <div className='navIconCont'>
                    <NavIcon navIcon={Notify} />
                    <NavIcon navIcon={Preview} />
                    <NavIcon navIcon={Profile} />
                </div>
            </div>
        </nav>
    );
}

export default Nav;