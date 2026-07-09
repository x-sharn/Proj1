export default function Navbar({ name, role, location }) {

    return (
        <nav className="bg-balck text-white py-5 px-8">
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
                    <li className="cursor-pointer hover:text-blue-400 transition">
                        Portfolio
                    </li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>

            </div>
        </nav>
    );


}