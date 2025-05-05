
import '../styles/Projects.css';

const Projects = () => {
    const projectList = [
        {
            name: 'Mechanics Service API',
            description: `Developed a Flask-based API for managing a mechanic service system.
            • Implemented functionality for managing customers, mechanics, and service tickets, including CRUD
            operations and user authentication.
            • Utilized SQLAlchemy for database management, Marshmallow for serialization/deserialization, and
            JWT for token-based authentication.
            • Designed and documented the API using Swagger, providing clear specifications for endpoints and data
            models.`
        },
        {
            name: 'Pokemon Information Search',
            description: `Developed a web application that displays information about various Pokemon, utilizing the PokeAPI for data retrieval.
            • Implemented a user-friendly interface with search functionality, allowing users to find and learn about different Pokemon by name or ID.
            • Designed and styled the application using HTML, CSS, and JavaScript, ensuring a responsive and visually appealing experience.
            • Incorporated image references and a carousel for showcasing Pokemon characters, enhancing the user's exploration and engagement.
            • Utilized JavaScript to handle user input, fetch data from the PokeAPI, and dynamically update the page content.
            • Deployed the application on a web server, making it accessible to users online.`
        },
        // { name: 'Project Three', description: 'Description for project three' },
    ];

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <div className="project-container">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;