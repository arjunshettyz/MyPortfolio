import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        
        <div className="resume-container">
          <div className="resume-header">
            <h1>Arjun Pangunuri</h1>
            <div className="resume-contact">
              <p><i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/arjunpangunuri/" target="_blank" rel="noopener noreferrer">linkedin.com/in/arjunpangunuri/</a></p>
              <p><i className="fab fa-github"></i> <a href="https://github.com/arjunshettyz" target="_blank" rel="noopener noreferrer">github.com/arjunshettyz</a></p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:Arjunpangunuri@gmail.com">Arjunpangunuri@gmail.com</a></p>
              <p><i className="fas fa-phone"></i> +91-8520984255</p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">SKILLS</h3>
            <div className="skills-list">
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

          <div className="resume-section">
            <h3 className="resume-section-title">FREELANCE</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4 className="position">Chegg Expert</h4>
                <p className="period">Since Jan 2024</p>
              </div>
              <p className="job-title">Subject Matter Expert</p>
              <ul className="experience-description">
                <li>Providing accurate and high-quality solutions for diverse Computer Science and Engineering problems.</li>
                <li>Ensure clear, detailed, and step-by-step explanations for student understanding.</li>
                <li>Consistently achieving high ratings by maintaining reliability and precision.</li>
                <li>Manage deadlines effectively while handling various topics with expertise.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">PROJECTS</h3>
            
            <div className="project-item">
              <div className="project-header">
                <h4 className="project-title">Shope - E-commerce Website</h4>
                <p className="project-date">Jul 2024</p>
              </div>
              <ul className="project-description">
                <li>Engineered a scalable MERN stack e-commerce platform to empower local shopkeepers to sell products online.</li>
                <li>Crafted a responsive and intuitive user interface using React and Bootstrap for enhanced user engagement.</li>
                <li>Implemented key features like user authentication, product catalog, order tracking, and payment gateway.</li>
                <li>Designed a responsive UI with React and Bootstrap, and developed a secure backend.</li>
              </ul>
              <p className="project-tech">Tech: HTML, CSS, Javascript, Node.js, React.js, Express.js, MongoDB | <a href="#" target="_blank" rel="noopener noreferrer">Github Link</a></p>
            </div>

            <div className="project-item">
              <div className="project-header">
                <h4 className="project-title">Salon Management Website</h4>
                <p className="project-date">Feb 2024</p>
              </div>
              <ul className="project-description">
                <li>Built a fully-featured salon appointment system enabling users to book grooming services in real-time.</li>
                <li>Designed a user-friendly, mobile-responsive interface using Bootstrap and vanilla JavaScript.</li>
                <li>Developed a PHP-based backend with MySQL to manage appointments, services, and customer data efficiently.</li>
                <li>Implemented live booking updates, authentication, and an admin dashboard for streamlined operations.</li>
              </ul>
              <p className="project-tech">Tech: HTML, CSS, JavaScript, Bootstrap, PHP, MySQL | <a href="#" target="_blank" rel="noopener noreferrer">Github Link</a></p>
            </div>

            <div className="project-item">
              <div className="project-header">
                <h4 className="project-title">Binary Search Visualization</h4>
                <p className="project-date">Dec 2023</p>
              </div>
              <ul className="project-description">
                <li>Created an interactive tool to visualize the Binary Search algorithm for educational purposes.</li>
                <li>Showcased real-time element tracing with dynamic animations and time complexity display.</li>
                <li>Enhanced learning experience with responsive UI, live feedback, and intuitive step-by-step flow.</li>
              </ul>
              <p className="project-tech">Tech: HTML, CSS, JavaScript | <a href="#" target="_blank" rel="noopener noreferrer">Github Link</a></p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">CERTIFICATES</h3>
            <ul className="certificate-list">
              <li><span className="certificate-name">Data Structures and Algorithms</span> | GeeksForGeeks <span className="certificate-date">May 2024</span></li>
              <li><span className="certificate-name">Building Web Applications in PHP</span> | Coursera <span className="certificate-date">Mar 2024</span></li>
              <li><span className="certificate-name">Server side JavaScript with Node.js</span> | Coursera <span className="certificate-date">Feb 2024</span></li>
              <li><span className="certificate-name">HTML, CSS, and Javascript for Web Developers</span> | Coursera <span className="certificate-date">Dec 2023</span></li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">ACHIEVEMENTS</h3>
            <ul className="achievements-list">
              <li>
                <span className="achievement-title">HackerRank</span>
                <p className="achievement-description">3-Star in Java, C++ and Python on HackerRank – Earned for problem-solving skills in competitive programming.</p>
              </li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            
            <div className="education-item">
              <div className="education-header">
                <h4 className="institution">Lovely Professional University</h4>
                <p className="location">Phagwara, Punjab</p>
              </div>
              <p className="degree">Bachelor of Technology - Computer Science and Engineering</p>
              <p className="education-details">CGPA: 6.5 | Since Aug 2023</p>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h4 className="institution">Lovely Professional University</h4>
                <p className="location">Phagwara, Punjab</p>
              </div>
              <p className="degree">Diploma – Computer Science and Engineering</p>
              <p className="education-details">CGPA: 8.32 | Jul 2020 - Mar 2023</p>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h4 className="institution">HRD School Of Excellence</h4>
                <p className="location">Devarakonda, Telangana</p>
              </div>
              <p className="degree">CBSE</p>
              <p className="education-details">Percentage: 73.6% | Mar 2020</p>
            </div>
          </div>

          <div className="resume-actions">
            <a 
              href="/collage cv.docx" 
              download="Arjun_Pangunuri_CV.docx" 
              className="btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 