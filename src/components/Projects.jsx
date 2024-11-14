import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projectList = [
        { name: 'Project One', description: 'Description for project one' },
        { name: 'Project Two', description: 'Description for project two' },
        { name: 'Project Three', description: 'Description for project three' },
    ];

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;