import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Total number of slides (0: first 2 cards, 1: last 2 cards)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <div className="about-image-container">
              {              }
              <div className="about-image-placeholder hover-scale">
                <img src={require('./IMG_4716.PNG')} alt="Profile" className="profile-image" /> 
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3 data-aos="fade-left">Hello, I'm Arjun Pangunuri</h3>
            <p data-aos="fade-left" data-aos-delay="100">
              I am a passionate Full Stack Developer with a strong foundation in web development and a 
              keen eye for creating engaging user experiences. My journey in the world of coding started 
              with a curiosity to build things that can make a difference.
            </p>
            <p data-aos="fade-left" data-aos-delay="200">
              With expertise in front-end technologies like React, HTML, CSS, and JavaScript, as well as 
              back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive 
              solutions. I am dedicated to writing clean, maintainable code and continuously learning new 
              technologies to stay at the forefront of web development.
            </p>
            <p data-aos="fade-left" data-aos-delay="300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and community forums.
            </p>
            <div className="about-info" data-aos="fade-up" data-aos-delay="400">
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
            <div className="about-links" data-aos="fade-up" data-aos-delay="500">
              <a href="https://linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer" className="social-link hover-scale">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer" className="social-link hover-scale">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container resume-section">
        <h2 className="section-title" data-aos="fade-up">Resume</h2>
        
        <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Skills</h3>
          <div className="resume-content">
            <div className="skills-grid">
              <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
                <div className="skill-card-content">
                  <i className="fas fa-code skill-icon"></i>
                  <h4>Languages</h4>
                  <div className="skill-tags">
                    <span className="skill-tag"><i className="fab fa-java"></i> Java</span>
                    <span className="skill-tag"><i className="fas fa-code"></i> C++</span>
                    <span className="skill-tag"><i className="fab fa-js"></i> JavaScript</span>
                    <span className="skill-tag"><i className="fas fa-code"></i> C</span>
                    <span className="skill-tag"><i className="fab fa-php"></i> PHP</span>
                  </div>
                </div>
              </div>

              <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                <div className="skill-card-content">
                  <i className="fas fa-laptop-code skill-icon"></i>
                  <h4>Frameworks</h4>
                  <div className="skill-tags">
                    <span className="skill-tag"><i className="fab fa-html5"></i> HTML/CSS</span>
                    <span className="skill-tag"><i className="fab fa-bootstrap"></i> Bootstrap</span>
                    <span className="skill-tag"><i className="fab fa-node-js"></i> NodeJS</span>
                    <span className="skill-tag"><i className="fab fa-react"></i> ReactJS</span>
                  </div>
                </div>
              </div>

              <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
                <div className="skill-card-content">
                  <i className="fas fa-database skill-icon"></i>
                  <h4>Databases</h4>
                  <div className="skill-tags">
                    <span className="skill-tag"><i className="fas fa-database"></i> MySQL</span>
                    <span className="skill-tag"><i className="fas fa-database"></i> MongoDB</span>
                    <span className="skill-tag"><i className="fas fa-database"></i> SQL Server</span>
                  </div>
                </div>
              </div>

              <div className="skill-card" data-aos="fade-up" data-aos-delay="500">
                <div className="skill-card-content">
                  <i className="fas fa-users skill-icon"></i>
                  <h4>Soft Skills</h4>
                  <div className="skill-tags">
                    <span className="skill-tag"><i className="fas fa-lightbulb"></i> Problem-Solving</span>
                    <span className="skill-tag"><i className="fas fa-users"></i> Team Player</span>
                    <span className="skill-tag"><i className="fas fa-tasks"></i> Project Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-block" data-aos="fade-up" data-aos-delay="200">
          <h3 className="resume-title">Freelance</h3>
          <div className="resume-content">
            <div className="resume-item">
              <div className="resume-item-header" data-aos="fade-right" data-aos-delay="300">
                <h4>Chegg Expert</h4>
                <span className="resume-date">Since Nov 2023</span>
              </div>
              <p className="resume-subtitle" data-aos="fade-right" data-aos-delay="400">Subject Matter Expert</p>
              <div className="experience-image-container" data-aos="fade-up" data-aos-delay="500">
                <a 
                  href="https://drive.google.com/file/d/1L_UUVIzhn0y77-StzRVvpoZAH7IAnkbT/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="experience-image-link hover-scale"
                >
                  <img 
                    src={require('./chegg.png')} 
                    alt="Chegg Expert Certificate" 
                    className="experience-image"
                  />
                </a>
              </div>
              <center><ul className="resume-list" data-aos="fade-up" data-aos-delay="600">
                <li>Providing accurate and high-quality solutions for diverse Computer Science and Engineering problems.</li>
                <li>Ensure clear, detailed, and step-by-step explanations for student understanding.</li>
                <li>Consistently achieving high ratings by maintaining reliability and precision.</li>
                <li>Manage deadlines effectively while handling various topics with expertise.</li>
              </ul></center>
              <div className="view-certificate-container" data-aos="fade-up" data-aos-delay="700">
                <a 
                  href="https://drive.google.com/file/d/1L_UUVIzhn0y77-StzRVvpoZAH7IAnkbT/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-certificate-link hover-lift"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-block" data-aos="fade-up" data-aos-delay="300">
          <h3 className="resume-title">Certificates</h3>
          <div className="resume-content">
            <div className="certificates-slider">
              <button className="slider-button prev hover-scale" onClick={prevSlide} data-aos="fade-right" data-aos-delay="400">
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="certificates-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* First slide with 2 cards */}
                <div className="certificates-slide">
                  <div className="certificate-card" data-aos="fade-up" data-aos-delay="500">
                    <div className="certificate-image">
                      <img src={require('./gfg.png')} alt="GeeksForGeeks Certificate" />
                    </div>
                    <div className="certificate-content">
                      <h4>Data Structures and Algorithms</h4>
                      <p className="certificate-issuer">GeeksForGeeks</p>
                      <p className="certificate-date">May 2024</p>
                      <a 
                        href="https://www.geeksforgeeks.org/certificate/3c690a982a6424c5c4fe94329c0c7298" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link hover-lift"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>

                  <div className="certificate-card" data-aos="fade-up" data-aos-delay="600">
                    <div className="certificate-image">
                      <img src={require('./php.png')} alt="PHP Certificate" />
                    </div>
                    <div className="certificate-content">
                      <h4>Building Web Applications in PHP</h4>
                      <p className="certificate-issuer">Coursera</p>
                      <p className="certificate-date">Mar 2024</p>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/verify/BY89H08AJRNW" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link hover-lift"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second slide with 2 cards */}
                <div className="certificates-slide">
                  <div className="certificate-card" data-aos="fade-up" data-aos-delay="700">
                    <div className="certificate-image">
                      <img src={require('./webdev.png')} alt="Web Development Certificate" />
                    </div>
                    <div className="certificate-content">
                      <h4>HTML, CSS, and Javascript for Web Developers</h4>
                      <p className="certificate-issuer">Coursera</p>
                      <p className="certificate-date">Dec 2023</p>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/verify/M59ACPNN6E8K" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link hover-lift"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>

                  <div className="certificate-card" data-aos="fade-up" data-aos-delay="800">
                    <div className="certificate-image">
                      <img src={require('./nodejs.png')} alt="Node.js Certificate" />
                    </div>
                    <div className="certificate-content">
                      <h4>Server side JavaScript with Node.js</h4>
                      <p className="certificate-issuer">Coursera</p>
                      <p className="certificate-date">Feb 2024</p>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/verify/G65BXMVDT7C7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link hover-lift"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <button className="slider-button next hover-scale" onClick={nextSlide} data-aos="fade-left" data-aos-delay="400">
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="slider-dots" data-aos="fade-up" data-aos-delay="900">
                {[0, 1].map((dot) => (
                  <button
                    key={dot}
                    className={`slider-dot ${currentSlide === dot ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(dot)}
                  />
                ))}
              </div>
            </div>
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
              <p>CGPA: 7.1</p>
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
