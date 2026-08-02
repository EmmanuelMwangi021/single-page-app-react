import ProjectCard from "./ProjectCard";

function ProjectList({projects}) {

    if (projects.length === 0) {
        return <p>No projects found.</p>;
    }
    
    return(
        <main className="project-list">
            {projects.map((project) =>(
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    />
            ))}
        </main>
    );
}
export default ProjectList;