import ProjectCard from "./ProjectCard";

function ProjectList({projects}) {
    return(
        <main>
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