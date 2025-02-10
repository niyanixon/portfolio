import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
      
        <section className="pContainer">
          <h2 className="projects">Projects</h2>
          <section className="projectsContainer">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </section>
        </section>
    )
}

export default Projects;