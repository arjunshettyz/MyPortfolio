import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Redux', icon: 'fas fa-code-branch' },
      ],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express.js', icon: 'fas fa-code' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'REST API', icon: 'fas fa-network-wired' },
        { name: 'SQL', icon: 'fas fa-database' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', icon: 'fab fa-github' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'TypeScript', icon: 'fas fa-code' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              className="skill-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-card-content">
                <i className={`${category.icon} skill-icon`}></i>
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span className="skill-tag" key={idx}>
                      <i className={skill.icon}></i>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 