import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Arjun</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Me</h4>
            <p><i className="fas fa-envelope"></i> Arjunpangunuri@gmai.com</p>
            <p><i className="fas fa-phone"></i> +91 8520984255</p>
            <p><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
          </div>
          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/AShettyz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/arjunshettyz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arjun Pangunuri- All Rights Reserved</p>
        </div>
      </div>

      <div 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`} 
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
};

export default Footer; 