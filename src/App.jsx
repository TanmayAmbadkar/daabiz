import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Thoughts from './components/Thoughts';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './modern.css';

function App() {
    return (
        <div className="App">
            <div className="ambient-background">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>
            <Header />
            <Hero />
            <About />
            <Achievements />
            <Thoughts />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
