export default function Contact({
    email,
    github,
    linkedin,
    resume,
  }) {
    return (
        <section id="contact" className="scroll-mt-20 bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
      
          <h2 className="text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>
      
          <div className="grid md:grid-cols-3 gap-6">
      
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                📧 Email
              </h3>
      
              <a
                href={`mailto:${email}`}
                className="text-blue-400 hover:underline"
              >
                {email}
              </a>
            </div>
      
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                💻 GitHub
              </h3>
      
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit GitHub
              </a>
            </div>
      
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                💼 LinkedIn
              </h3>
      
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit LinkedIn
              </a>
            </div>
      
          </div>
      
          <div className="text-center mt-10">
            <a
              href={resume}
              className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>
          </div>
      
        </div>
      </section>
    );
  }