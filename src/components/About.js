import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              {              }
              <div className="about-image-placeholder">
              <img src={require('./IMG_4716.PNG')} alt="Profile" className="profile-image" /> 
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Hello, I'm Arjun Pangunuri</h3>
            <p>
              I am a passionate Full Stack Developer with a strong foundation in web development and a 
              keen eye for creating engaging user experiences. My journey in the world of coding started 
              with a curiosity to build things that can make a difference.
            </p>
            <p>
              With expertise in front-end technologies like React, HTML, CSS, and JavaScript, as well as 
              back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive 
              solutions. I am dedicated to writing clean, maintainable code and continuously learning new 
              technologies to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and community forums.
            </p>
            <div className="about-info">
              <div className="about-info-item">
                <h4>Name:</h4>
                <p>Arjun Pangunuri</p>
              </div>
              <div className="about-info-item">
                <h4>Email:</h4>
                <p>Arjunpangunuri@gmail.com</p>
              </div>
              <div className="about-info-item">
                <h4>Location:</h4>
                <p>India</p>
              </div>
              <div className="about-info-item">
                <h4>Mobile:</h4>
                <p>+91-8520984255</p>
              </div>
            </div>
            <div className="about-links">
              <a href="https://linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container resume-section">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-block">
          <h3 className="resume-title">Skills</h3>
          <div className="resume-content">
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>Java, C++, JavaScript, C, PHP</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks:</h4>
              <p>HTML and CSS, Bootstrap, NodeJS, ReactJS</p>
            </div>
            <div className="skill-category">
              <h4>Databases:</h4>
              <p>MySQL, MongoDB, SQL Server</p>
            </div>
            <div className="skill-category">
              <h4>Soft Skills:</h4>
              <p>Problem-Solving, Team Player, Project Management</p>
            </div>
          </div>
        </div>
        
        <div className="resume-block">
          <h3 className="resume-title">Experience</h3>
          <div className="resume-content">
            <div className="resume-item">
              <div className="resume-item-header">
                <h4>Chegg Expert</h4>
                <span className="resume-date">Since Jan 2024</span>
              </div>
              <p className="resume-subtitle">Subject Matter Expert</p>
              <ul className="resume-list">
                <li>Providing accurate and high-quality solutions for diverse Computer Science and Engineering problems.</li>
                <li>Ensure clear, detailed, and step-by-step explanations for student understanding.</li>
                <li>Consistently achieving high ratings by maintaining reliability and precision.</li>
                <li>Manage deadlines effectively while handling various topics with expertise.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-block">
          <h3 className="resume-title">Certificates</h3>
          <div className="resume-content">
            <ul className="certificate-list">
              <li>
                <span className="certificate-name">Data Structures and Algorithms | GeeksForGeeks</span>
                <span className="resume-date">May 2024</span>
              </li>
              <li>
                <span className="certificate-name">Building Web Applications in PHP | Coursera</span>
                <span className="resume-date">Mar 2024</span>
              </li>
              <li>
                <span className="certificate-name">Server side JavaScript with Node.js | Coursera</span>
                <span className="resume-date">Feb 2024</span>
              </li>
              <li>
                <span className="certificate-name">HTML, CSS, and Javascript for Web Developers | Coursera</span>
                <span className="resume-date">Dec 2023</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="resume-block">
          <h3 className="resume-title">Achievements</h3>
          <div className="resume-content">
            <div className="resume-item">
              <h4>HackerRank</h4>
              <p>3-Star in Java, C++ and Python on HackerRank – Earned for problem-solving skills in competitive programming.</p>
            </div>
          </div>
        </div>
        
        <div className="resume-block">
          <h3 className="resume-title">Education</h3>
          <div className="resume-content">
            <div className="resume-item">
              <div className="resume-item-header">
                <h4>Bachelor of Technology - Computer Science and Engineering</h4>
                <span className="resume-date">Since Aug 2023</span>
              </div>
              <p className="resume-subtitle">Lovely Professional University, Phagwara, Punjab</p>
              <p>CGPA: 6.7</p>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h4>Diploma - Computer Science and Engineering</h4>
                <span className="resume-date">Jul 2020 - Mar 2023</span>
              </div>
              <p className="resume-subtitle">Lovely Professional University, Phagwara, Punjab</p>
              <p>CGPA: 8.32</p>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h4>CBSE</h4>
                <span className="resume-date">Mar 2020</span>
              </div>
              <p className="resume-subtitle">HRD School Of Excellence, Devarakonda, Telangana</p>
              <p>Percentage: 73.6%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 