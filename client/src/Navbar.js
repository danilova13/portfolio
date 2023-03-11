import { Link } from "react-router-dom";

const Navbar = () => {
	return ( 
		<nav className="bg-cyan-800 text-white py-10 px-7 mb-12 flex justify-between">
			<Link to="/" className="text-lg">Anya Danilova</Link>
			<ul className="flex items-center">
				<li className="pl-4"><Link to="/about">About me</Link></li>
				<li className="pl-4"><Link to="/projects">Projects</Link></li>
				<li className="pl-4"><Link to="/cv">CV</Link></li>
				<li className="pl-4"><Link to="/contact">Contact Info</Link></li>
			</ul>
		</nav>
	);
}
 
export default Navbar;