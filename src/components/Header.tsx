import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

// Icons
import Logo from '../assets/icons/LogoIcon';
import MenuIcon from '../assets/icons/HamburgerIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import { HistoryIcon } from '../assets/icons/HistoryIcon';
import { GreetingsIcon } from '../assets/icons/GreetingsIcon';
import { AnthemIcon } from '../assets/icons/AnthemIcon';

export const Header = () => {
    // State for navbar visibility
    const [isNavbarVisible, setNavbarVisibility] = useState(false);

    // Toggle navbar visibility
    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };

    return (
        <div>
            {/* Overlay for navbar */}
            {isNavbarVisible && (
                <div className="overlay z-1" onClick={toggleNavbar}></div>
            )}

            {/* Header */}
            <div className='full-width header flex-center-y shadow z-5'>
                <div className='flex-center-y z-5'>
                    <Logo />
                    <p>Southern California<br />Deaconess Association & Friends</p>
                </div>
                {isNavbarVisible ? (
                    <CloseIcon className="hamburger-button hover-pointer z-5" style={{ padding: '10px' }} onClick={toggleNavbar} />
                ) : (
                    <MenuIcon className="hamburger-button hover-pointer z-5" onClick={toggleNavbar} />
                )}
            </div>

            {/* Navigation Menu (Mobile)*/}
            <div className={`nav-mobile flex-column z-5`}>
                <Link to='/' className={`flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><HistoryIcon />Part I: History</Link>
                <Link to='/greetings' className={`flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><GreetingsIcon />Part II: Greetings</Link>
                <Link to='/anthem' className={`flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><AnthemIcon />Part III: Anthem</Link>
            </div>
        </div >
    )
}
