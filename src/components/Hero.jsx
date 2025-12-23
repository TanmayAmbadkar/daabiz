import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import content from '../data/content.json';

const Hero = () => {
    const { title, subtitle, buttons } = content.home.hero;

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div style={{ marginTop: '2.5rem' }}>
                        {buttons.map((btn, index) => (
                            <Link
                                key={index}
                                to={btn.link.replace('/', '')}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={`btn ${btn.type === 'primary' ? 'btn-primary' : 'btn-outline'}`}
                                style={{ marginRight: '1rem', color: btn.type === 'outline' ? '#334155' : 'white', borderColor: btn.type === 'outline' ? '#334155' : 'transparent' }}
                            >
                                {btn.text}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
