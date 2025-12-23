import React from 'react';
import content from '../data/content.json';

const Thoughts = () => {
    const { title, intro, items } = content.thoughts;

    return (
        <section id="thoughts" className="section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <p className="section-subtitle">{intro}</p>

                <div className="thoughts-grid">
                    {items.map((item, idx) => (
                        <div key={idx} className="thought-card card-base">
                            <p className="thought-text">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Thoughts;
