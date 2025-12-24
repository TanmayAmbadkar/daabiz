import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="home" smooth={true} duration={500} className="navbar-brand" style={{ cursor: 'pointer' }} onClick={closeMenu}>
                    <img src="/media/logo.png" alt="DAA Business Associates" className="logo" />
                </Link>

                <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" onClick={closeMenu}>
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
