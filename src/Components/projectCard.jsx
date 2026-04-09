const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-[#1b0f2e] to-[#120824] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="h-40 sm:h-44 md:h-48 w-full object-cover"
      />

      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3 mt-4">
          <a
            href={project.live}
            target="_blank"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:opacity-90 transition"
          >
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-600 text-gray-300 rounded hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;