import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const TeamMember = ({ name, image, bio, delay, expanded, onToggle, isDesktop }) => {
    return (
        <motion.div
            className={`team-card ${expanded ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onClick={isDesktop ? undefined : onToggle}
            style={{ cursor: isDesktop ? 'default' : 'pointer' }}
        >
            <div className="team-header">
                <img src={image} alt={name} className="team-avatar" />
                <h3>{name}</h3>
                <div className="team-toggle">
                    <i className={`fas fa-chevron-down ${expanded ? 'rotate' : ''}`}></i>
                </div>
            </div>
            <motion.div
                className="team-body"
                initial={false}
                animate={{
                    height: (isDesktop || expanded) ? 'auto' : 0,
                    opacity: (isDesktop || expanded) ? 1 : 0,
                    padding: (isDesktop || expanded) ? '2rem' : '0 2rem'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
            >
                {bio.map((paragraph, idx) => (
                    <p key={idx} className="team-bio">{paragraph}</p>
                ))}
            </motion.div>
        </motion.div>
    );
};

const About = () => {
    const { leadership, offices, affiliates, faq, history } = content.about;
    const [expandedMember, setExpandedMember] = React.useState(null);
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 968);

    React.useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 968);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (index) => {
        if (isDesktop) return;
        if (expandedMember === index) {
            setExpandedMember(null);
        } else {
            setExpandedMember(index);
        }
    };

    return (
        <div id="about">
            <section className="section">
                <div className="container">
                    <h2 className="section-title">{leadership.title}</h2>
                    <div className="section-subtitle">
                        {leadership.description.map((desc, idx) => (
                            <p key={idx} style={{ marginBottom: '1rem' }}>{desc}</p>
                        ))}
                    </div>

                    <div className="team-grid">
                        {leadership.members.map((member, index) => (
                            <TeamMember
                                key={index}
                                {...member}
                                delay={index * 0.2}
                                expanded={expandedMember === index}
                                onToggle={() => handleToggle(index)}
                                isDesktop={isDesktop}
                            />
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '4rem', fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '4rem auto 0' }}>
                        {offices}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{affiliates.title}</h2>
                    <div className="services-grid">
                        {affiliates.items.map((item, idx) => (
                            <div key={idx} className="card-base">
                                <p style={{ fontSize: '1.1rem', color: '#475569' }}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{faq.title}</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faq.items.map((item, idx) => (
                            <div key={idx} className="card-base" style={{ marginBottom: '1.5rem', padding: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem', color: '#334155' }}>{item.q}</h4>
                                <p style={{ color: '#64748b' }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{history.title}</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#475569' }}>
                        {history.content}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
