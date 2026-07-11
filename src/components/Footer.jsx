export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto text-center">
  
          <p>
            © {new Date().getFullYear()} Sharon Xavier.
          </p>
  
          <p className="mt-2">
            Built with Next.js & Tailwind CSS
          </p>
  
        </div>
      </footer>
    );
  }