export default function Navbar() {

    return (
        <nav className="bg-balck text-white p-4">
            <div className="container mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    SX Portfolio
                </h1>

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