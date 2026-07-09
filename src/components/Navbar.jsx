export default function Navbar({ name, role }) {

    return (
        <nav className="bg-balck text-white p-4">
            <div className="container mx-auto flex justify-between items-center">

                <h1 className="text-xl font-bold">
                    {name}
                </h1>
                <p className="text-sm text-gray-300 font-bold">
                    {role}
                </p>

                <ul className="flex space-x-4">
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>

            </div>
        </nav>
    );


}