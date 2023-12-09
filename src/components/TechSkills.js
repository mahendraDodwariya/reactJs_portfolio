import React from 'react';
import './TechSkills.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    <div className="work-container">
      <h1 className="skills-heading">Tech-stack</h1>
    <div className="skills-container">
      <div className="skills-card">
        <h2 className='skills-title'>Programming Languages</h2>
        <ul className='skills-details'>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2 className='skills-title'>Tools/Frameworks</h2>
        <ul className='skills-details'>
          <li>Django</li>
          <li>ReactJS</li>
          <li>PostgreSQL</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Redis</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2 className='skills-title'>Concepts</h2>
        <ul className='skills-details'>
          <li>Data Structures & Algorithms</li>
          <li>Operating Systems</li>
          <li>Computer Networks</li>
          <li>OOPs </li>
          <li>DBMS </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Skills;
