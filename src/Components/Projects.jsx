import projects from "../data/projects";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-[#160A27] to-[#1e0f35]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-10 md:mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;