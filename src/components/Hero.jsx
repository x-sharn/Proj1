export default function Hero({ name, role, description }) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
        <div className="text-center max-w-3xl">
  
          <p className="text-blue-400 text-lg mb-3">
          Welcome!
          </p>
  
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            {name}
          </h1>
  
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {role}
          </h2>
  
          <p className="text-lg text-gray-400 leading-8 mb-10">
            {description}
          </p>
  
          <div className="flex justify-center gap-4">
  
            <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold">
              View Projects
            </button>
  
            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
              Contact Me
            </button>
  
          </div>
  
        </div>
      </section>
    );
  }