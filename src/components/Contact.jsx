export default function Contact({
    email,
    github,
    linkedin,
    resume,
  }) {
    return (
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
  
          <h2 className="text-4xl font-bold mb-10">
            Contact Me
          </h2>
  
          <div className="space-y-6">
  
            <div>
              <h3 className="text-xl font-semibold">
                📧 Email
              </h3>
  
              <a
                href={`mailto:${email}`}
                className="text-blue-400 hover:underline"
              >
                {email}
              </a>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">
                🐙 GitHub
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
  
            <div>
              <h3 className="text-xl font-semibold">
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
  
            <div className="pt-6">
              <a
                href={resume}
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Download Resume
              </a>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }