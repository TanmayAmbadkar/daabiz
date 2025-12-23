import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, icon, description, delay }) => (
    <motion.div
        className="service-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="service-icon">
            <i className={`fas ${icon}`}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            title: "Hospital Planning",
            icon: "fa-hospital",
            description: "Complete planning and co-ordination of agencies in setting up tertiary care hospitals."
        },
        {
            title: "Medical Equipment",
            icon: "fa-stethoscope",
            description: "Sourcing and procurement of high-quality medical disposable products and equipment."
        },
        {
            title: "Consultancy",
            icon: "fa-user-md",
            description: "Expert advice on healthcare innovation, market strategy, and public-private partnerships."
        },
        {
            title: "Global Sourcing",
            icon: "fa-globe",
            description: "Sourcing and supply chain management for consumer electronics and medical devices."
        }
    ];

    return (
        <section id="services" className="section" style={{ background: '#f1f5f9' }}>
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    We provide comprehensive solutions for the healthcare industry.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
