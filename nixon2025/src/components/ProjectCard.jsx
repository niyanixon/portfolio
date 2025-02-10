import projects from "../data/projects"


const ProjectCard = ({project}) => {
    return(
        <section className="projectCard">
        <h3>{project.title}</h3>
        {/* <img src={project.img} alt="Project image" /> */}
        <p>{project.description}</p>
        <h4>Tech Stack:</h4>
        <p>{project.techStack.join(", ")}</p>
        <a className="link" href={project.link}>View Project</a>
      </section>
    )
 
}

export default ProjectCard;