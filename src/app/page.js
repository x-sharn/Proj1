import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
  
      <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Sharon Xavier
        </h1>
  
        <p className="text-lg text-gray-300 text-center max-w-xl mb-8">
          Hi! I'm learning Next.js and Tailwind CSS.
        </p>
  
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          View Projects
        </button>
      </main>
    </>
  );
}