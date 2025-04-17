import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Arjun</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build responsive web applications with modern technologies that solve real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#projects" className="btn">View My Work</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Arjunpangunuri@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
        
  
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
            <img src={require('./IMG_4730.PNG')} alt="Profile" className="profile-image" /> 
            </div>

          </div>
        </div>
      </div>
      <div className="hero-scroll-down">
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero; 