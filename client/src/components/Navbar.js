import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navClassName = `${isNavOpen ? "" : "hidden"} w-full md:block md:w-auto`
	const navItems = [
		{path: '/projects', name: 'Projects'},
		{path: '/hobbies', name: 'Hobbies'},
		{path: '/contact', name: 'Contact'},
	];

	const toggleNav = () => setIsNavOpen((prev) => !prev);

	return ( 
	
		<nav className="p-3 fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link to="/" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap text-purple-900">Anya Danilova</span>
				</Link>
				<button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm
				 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
				 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
				 aria-controls="navbar-solid-bg"
					aria-expanded={isNavOpen}
					onClick={toggleNav}	
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
				</button>
				<div onClick={toggleNav} className={navClassName} id=" backdrop-filter backdrop-blur-lg bg-opacity-30">
					<ul className="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm 
						md:font-medium md:border-0 md:bg-transparent 
						backdrop-filter backdrop-blur-lg bg-opacity-30">
						{
							navItems.map((item, index) => (
								<li key={index}><NavbarLink path={item.path} name={item.name}/></li>
							))
						}
					</ul>
				</div>
			</div>
		</nav>
	);
}
 
export default Navbar;