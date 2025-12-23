import React from 'react';
import content from '../data/content.json';

const Projects = () => {
    const { title, sections } = content.projects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">{title}</h2>

                {sections.map((section, idx) => (
                    <div key={idx} className="project-section">
                        <h3 className="project-title">{section.title}</h3>
                        {section.subtitle && <h4 className="project-subtitle">{section.subtitle}</h4>}
                        {section.intro && <p className="project-intro">{section.intro}</p>}

                        <div className="projects-grid">
                            {section.items.map((item, i) => (
                                <div key={i} className="project-card service-card">
                                    <div dangerouslySetInnerHTML={{ __html: item }} className="project-text"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
