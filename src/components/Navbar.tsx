import Volt from "../../public/volt.svg";

export default function Navbar() {
	return (
		<header>
			<nav className="flex justify-between items-center px-5 py-4">
				<img src={Volt} alt="" className="size-6" />
			</nav>
		</header>
	);
}
