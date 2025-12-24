import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <img src="/media/logo.png" alt="DAA Biz" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                            A Group company started as a manufacturer of medical disposable products in the late eighties.
                        </p>
                    </div>

                    <div>
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link></li>
                            <li><Link to="about" smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Us</Link></li>
                            <li><Link to="achievements" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Achievements</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Projects</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Projects</h5>
                        <ul className="footer-links">
                            <li><Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Established Hospitals</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Greenfield Hospitals</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Construction</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Startups</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Contact</h5>
                        <ul className="footer-links">
                            <li>info@daabiz.in</li>
                            <li>+91 9081259660</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    © {new Date().getFullYear()} DAA Business Associates Pvt. Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
