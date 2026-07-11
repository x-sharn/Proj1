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
                   
                    <a href="#home">
                        <li className="hover:text-blue-400 transition">
                            Home
                        </li>
                    </a>
                    <a href="#about">
                        <li className="hover:text-blue-400 transition">
                            About
                        </li>
                    </a>
                    <a href="#projects">
                        <li className="hover:text-blue-400 transition">
                            Projects
                        </li>
                    </a>
                    <a href="#skills">
                        <li className="hover:text-blue-400 transition">
                            Skills
                        </li>
                    </a>
                    <a href="#contact">
                        <li className="hover:text-blue-400 transition">
                            Contact
                        </li>
                    </a>
                </ul>

            </div>
        </nav>
    );


}