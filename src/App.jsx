import React, { Suspense, lazy } from 'react';
import { LazyMotion, domMax } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import './modern.css';

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'));
const Achievements = lazy(() => import('./components/Achievements'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback
const SectionLoader = () => (
    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loader"></div>
    </div>
);

function App() {
    return (
        <LazyMotion features={domMax}>
            <div className="App">
                <div className="ambient-background">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>
                <Header />
                <Hero />
                <Suspense fallback={<SectionLoader />}>
                    <About />
                    <Achievements />
                    <Projects />
                    <Contact />
                    <Footer />
                </Suspense>
            </div>
        </LazyMotion>
    );
}

export default App;
