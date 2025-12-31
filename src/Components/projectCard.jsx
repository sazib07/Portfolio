const ProjectCard = ({ project }) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded hover:bg-gray-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
