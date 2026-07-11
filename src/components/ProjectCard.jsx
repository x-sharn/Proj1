export default function ProjectCard({
    title,
    description,
    technology,
    github,
  }) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
  
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>
  
        <p className="text-gray-300 mb-4">
          {description}
        </p>
  
        <p className="text-blue-400 mb-6">
          {technology}
        </p>
  
        <a
          href={github}
          target="_blank"
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          GitHub
        </a>
  
      </div>
    );
  }