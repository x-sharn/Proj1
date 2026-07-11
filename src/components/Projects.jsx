import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technology={project.technology}
              github={project.github}
            />
          ))}

        </div>

      </div>
    </section>
  );
}