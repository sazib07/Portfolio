import projects from "../data/projects";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#11071F]">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
