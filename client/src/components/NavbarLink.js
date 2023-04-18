import { Link } from "react-router-dom";

const NavbarLink = ({ name, path }) => {
	return (
		<Link
			to={path}
			className="block py-2 pl-3 pr-4
			md:border-0 md:p-0
			text-purple-900
			hover:text-pink-800"
		>{name}</Link>
	)
}

export default NavbarLink;