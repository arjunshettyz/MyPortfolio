import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting" data-aos="fade-right">Hello, I'm</p>
          <h1 className="hero-name" data-aos="fade-right" data-aos-delay="100">Arjun</h1>
          <h2 className="hero-title" data-aos="fade-right" data-aos-delay="200">Full Stack Developer</h2>
          <p className="hero-description" data-aos="fade-right" data-aos-delay="300">
            I build responsive web applications with modern technologies that solve real-world problems.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <a href="#contact" className="btn hover-lift">Contact Me</a>
            <a href="#projects" className="btn hover-lift">View My Work</a>
          </div>
          <div className="hero-social" data-aos="fade-up" data-aos-delay="500">
            <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer" className="hover-scale">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer" className="hover-scale">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Arjunpangunuri@gmail.com" target="_blank" rel="noopener noreferrer" className="hover-scale">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder hover-scale">
              <img src={require('./IMG_4730.PNG')} alt="Profile" className="profile-image" /> 
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-down" data-aos="fade-up" data-aos-delay="600">
        <a href="#about" className="hover-scale">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero; 