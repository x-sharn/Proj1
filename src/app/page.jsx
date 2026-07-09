import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar name="Sharon Xavier" role="Future Full Stack Developer" location="India"
      />

      <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Sharon Xavier.
          
        </h1>

        <p className="text-lg text-gray-300 text-center max-w-xl mb-8">
        Future Full Stack Developer,
          I build modern websites using Next.js,
          React and Tailwind CSS.        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          View Projects
        </button>
      </main>
    </>
  );
}