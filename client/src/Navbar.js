import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navClassName = `${isNavOpen ? "" : "hidden"} w-full md:block md:w-auto`

	return ( 
	
		<nav className="p-3 fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link to="/" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap text-purple-900">Anya Danilova</span>
				</Link>
				<button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm
				 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
				 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
				 aria-controls="navbar-solid-bg"
					aria-expanded={isNavOpen}
					onClick={() => setIsNavOpen((prev) => !prev)}	
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
				</button>
				<div className={navClassName} id=" backdrop-filter backdrop-blur-lg bg-opacity-30">
					<ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm 
						md:font-medium md:border-0 md:bg-transparent dark:bg-amber-200 md:dark:bg-transparent dark:border-pink-700
						backdrop-filter backdrop-blur-lg bg-opacity-30">
						<li>
							<Link to="/about" class="block py-2 pl-3 pr-4
							 text-purple-900 
							 md:text-red-700 md:p-0 md:dark:text-purple-900 dark:bg-amber-100
							 backdrop-filter backdrop-blur-lg bg-opacity-30
							 md:hover:text-blue-700
							 dark:hover:text-pink-800
							 md:dark:bg-transparent" aria-current="page">About</Link>
						</li>
						<li>
							<Link to="/projects" class="block py-2 pl-3 pr-4
							text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0
							md:hover:text-blue-700 md:p-0 dark:text-purple-900 md:dark:hover:text-white
						 dark:hover:bg-amber-200 dark:hover:text-pink-800 md:dark:hover:bg-transparent">Projects</Link>
						</li>
						<li>
							<Link to="/cv" class="block py-2 pl-3 pr-4
							text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0
							md:hover:text-blue-700 md:p-0 dark:text-purple-900 md:dark:hover:text-white
							 dark:hover:bg-amber-200 dark:hover:text-pink-800 md:dark:hover:bg-transparent">CV</Link>
						</li>
						<li>
							<Link to="/contact" class="block py-2 pl-3 pr-4
							 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0
							 md:hover:text-blue-700 md:p-0 dark:text-purple-900 md:dark:hover:text-white  dark:hover:bg-amber-200 dark:hover:text-pink-800
							  md:dark:hover:bg-transparent">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>


		// <nav className="sticky top-0 text-purple-900 py-5 px-7 flex justify-between backdrop-filter backdrop-blur-lg bg-opacity-30">
		// 	<Link to="/" className="text-2xl font-extrabold">Anya Danilova</Link>
		// 	<ul className="flex items-center">
		// 		<li className="pl-4"><Link to="/about">About me</Link></li>
		// 		<li className="pl-4"><Link to="/projects">Projects</Link></li>
		// 		<li className="pl-4"><Link to="/cv">CV</Link></li>
		// 		<li className="pl-4"><Link to="/contact">Contact Info</Link></li>
		// 	</ul>
		// </nav>
	);
}
 
export default Navbar;