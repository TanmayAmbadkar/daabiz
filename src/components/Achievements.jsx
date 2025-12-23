import React from 'react';
import content from '../data/content.json';

const Achievements = () => {
    const { title, sections } = content.achievements;

    return (
        <section id="achievements" className="section">
            <div className="container">
                <h2 className="section-title">{title}</h2>

                {sections.map((section, idx) => (
                    <div key={idx} className="achievement-section">
                        <h3 className="achievement-title">{section.title}</h3>
                        <div className="achievement-grid">
                            {section.items.map((item, i) => (
                                <div key={i} className="achievement-card card-base">
                                    <i className="fas fa-check-circle achievement-icon"></i>
                                    <span dangerouslySetInnerHTML={{ __html: item }} className="achievement-text"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
