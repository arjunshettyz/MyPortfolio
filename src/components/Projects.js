import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Shope - E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description: 'A scalable MERN stack e-commerce platform to empower local shopkeepers to sell products online.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Express.js', 'MongoDB'],
      demo: '#',
      code: 'https://github.com/arjunshettyz/Shopo',
    },
    {
      id: 2,
      title: 'Salon Management Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description: 'A fully-featured salon appointment system enabling users to book grooming services in real-time.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      demo: '#',
      code: 'https://github.com/arjunshettyz/Salon-Management-System',
    },
    {
      id: 3,
      title: 'Binary Search Visualization',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsZ29yaXRobXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description: 'An interactive tool to visualize the Binary Search algorithm for educational purposes.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      code: 'https://github.com/arjunshettyz/Binary-Search-Visualization',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${filter === 'ui' ? 'active' : ''}`}
            onClick={() => setFilter('ui')}
          >
            UI/UX
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech">{tech}</span>
                  ))}
                </div>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 