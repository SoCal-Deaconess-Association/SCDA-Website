import { useState } from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

// Icons
import Logo from '../assets/icons/LogoIcon';
import MenuIcon from '../assets/icons/HamburgerIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import { HistoryIcon } from '../assets/icons/HistoryIcon';
import { GreetingsIcon } from '../assets/icons/GreetingsIcon';
import { AnthemIcon } from '../assets/icons/AnthemIcon';

export const Header = () => {
    // Responsive breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMobileLandscape = useMediaQuery({ maxWidth: 1023, orientation: 'landscape' });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // State for navbar visibility
    const [isNavbarVisible, setNavbarVisibility] = useState(false);

    // Toggle navbar visibility
    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };

    return (
        <div>
            {/* Overlay for navbar */}
            {(isMobile || isMobileLandscape) && isNavbarVisible && (
                <div className="overlay z-2" onClick={toggleNavbar}></div>
            )}

            {/* Header */}
            <div className='width-full header flex-center-y shadow z-5'>
                {/* Left Spacer (Desktop) */}
                {isDesktop && (
                    <div></div>
                )}

                <div className='logo flex-center-y z-5'>
                    <Logo />
                    <p>Southern California<br />Deaconess Association & Friends</p>
                </div>

                {/* Navigation Bar (Tablet/Desktop)*/}
                {!isMobileLandscape && (isTablet || isDesktop) && (
                    <div className='nav-desktop flex-center-xy z-5'>
                        <Link to='/' className='shadow flex-center-xy no-highlight'><HistoryIcon />History</Link>
                        <Link to='/greetings' className='shadow flex-center-xy no-highlight'><GreetingsIcon />Greetings & Stories</Link>
                        <Link to='/anthem' className='shadow flex-center-xy no-highlight'><AnthemIcon />Anthem</Link>
                    </div>
                )}

                {/* Navigation Menu Button (Mobile)*/}
                {(isMobile || isMobileLandscape) && (
                    isNavbarVisible ? (
                        <CloseIcon className="close-button hover-pointer z-5 no-highlight" style={{ padding: '10px' }} onClick={toggleNavbar} />
                    ) : (
                        <MenuIcon className="hamburger-button hover-pointer z-5 no-highlight" onClick={toggleNavbar} />
                    )
                )}

                {/* Right Spacer (Desktop) */}
                {isDesktop && (
                    <div></div>
                )}
            </div>

            {/* Navigation Menu (Mobile)*/}
            {(isMobile || isMobileLandscape) && (
                <div className={`nav-mobile flex-column z-5`}>
                    <Link to='/' className={`no-highlight shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><HistoryIcon />Part I: History</Link>
                    <Link to='/greetings' className={`no-highlight shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><GreetingsIcon />Part II: Greetings</Link>
                    <Link to='/anthem' className={`no-highlight shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><AnthemIcon />Part III: Anthem</Link>
                </div>
            )}
        </div >
    )
}
