export default function Navbar({ name, role, location }) {

    return (
        <nav id="navbar" className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white py-5 px-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                <div>
                    <h1 className="text-xl font-bold">
                        {name}
                    </h1>

                    <p className="text-sm text-gray-300">
                        {role}
                    </p>
                    <p className="text-sm text-gray-300">
                        {location}
                    </p>
                </div>

                <ul className="flex space-x-4">
                    <li>
                        <a href="#home" className="hover:text-blue-400 transition">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-blue-400 transition">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    );


}