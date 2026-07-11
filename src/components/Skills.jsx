export default function Skills({ skills }) {
    return (
      <section id="skills" className="scroll-mt-20 bg-slate-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold mb-10 text-center">
            My Skills
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 px-5 py-3 rounded-full text-blue-400 font-medium hover:bg-blue-600 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
  
        </div>
      </section>
    );
  }