import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import FFD_Logo_Dark from "../assets/FFD-logo-dark.svg";
import FFD_Logo_White from "../assets/FFD-logo-white.svg";
import { useTheme } from "../hooks/useTheme";
import { NavigationDropdown } from "./Dropdown";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const closeMenuButtonRef = useRef<HTMLButtonElement>(null);
	const { theme, toggleTheme } = useTheme();

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				closeMenuButtonRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!closeMenuButtonRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header>
			<nav className="flex justify-between items-center px-5 sm:px-10 py-4">
				{/* Logo */}
				{theme === "dark" ? (
					<img
						src={FFD_Logo_White}
						alt="Future-First Design Logo"
						fetchPriority="high"
						className="w-16"
					/>
				) : (
					<img
						src={FFD_Logo_Dark}
						alt="Future-First Design Logo"
						fetchPriority="high"
						className="w-16"
					/>
				)}

				<div className="flex items-center xs:hidden gap-x-5">
					<button
						type="button"
						className="hover:cursor-pointer"
						onClick={toggleTheme}
					>
						{theme === "dark" ? <MoonIcon /> : <SunIcon />}
					</button>

					{isMenuOpen ? (
						<button
							type="button"
							className="hover:cursor-pointer"
							aria-label="Close menu"
							onClick={() => {
								setIsMenuOpen(false);
							}}
							ref={closeMenuButtonRef}
						>
							<CloseIcon />
						</button>
					) : (
						<button
							type="button"
							className="hover:cursor-pointer"
							aria-label="Open menu"
							onClick={() => {
								setIsMenuOpen(true);
							}}
						>
							<MenuIcon />
						</button>
					)}
				</div>

				{/* Wide screen navbar */}
				<div className="hidden xs:flex gap-x-6 dark:text-gray-100 font-inter font-medium text-sm">
					<Link to="/">
						<p className="hover:underline">Home</p>
					</Link>

					<Link to="/introduction">
						<p className="hover:underline">Introduction</p>
					</Link>

					<Link to="/faq">
						<p className="hover:underline">FAQ</p>
					</Link>
				</div>

				{/* Mobile navigation dropdown */}
				<div
					className={`${isMenuOpen ? "block" : "hidden"} xs:hidden absolute top-12 right-0 mr-2 z-50`}
					ref={dropdownRef}
				>
					<div className="animate-in fade-in duration-240">
						<NavigationDropdown backgroundColor={"white"} />
					</div>
				</div>

				{/* Social medias */}
				<div className="hidden xs:flex items-center gap-x-5">
					<button
						type="button"
						className="hover:cursor-pointer"
						onClick={toggleTheme}
					>
						{theme === "dark" ? <MoonIcon /> : <SunIcon />}
					</button>

					<a
						href="https://x.com/home"
						target="_blank"
						rel="noopener noreferrer"
					>
						<XIcon />
					</a>

					<a
						href="https://github.com/ShayokhShorfuddin/future-first-design"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon />
					</a>
				</div>
			</nav>
		</header>
	);
}

// Icons
export function XIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-label="X (formerly Twitter)"
			className="w-5 fill-stone-600 hover:fill-stone-800 xs:dark:fill-gray-400 xs:dark:hover:fill-gray-100 transition-colors duration-200 ease-in-out"
		>
			<title>X (formerly Twitter)</title>
			<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
		</svg>
	);
}

export function GithubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-label="GitHub"
			className="w-5 fill-stone-600 hover:fill-stone-800  xs:dark:fill-gray-400 xs:dark:hover:fill-gray-100 transition-colors duration-200 ease-in-out"
		>
			<title>Github</title>
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
		</svg>
	);
}

export function MoonIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			aria-label="Switch to light mode"
			className="w-5 fill-gray-200"
		>
			<title>Switch to light mode</title>
			<path
				fillRule="evenodd"
				d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function SunIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-label="Switch to dark mode"
			className="w-5 fill-yellow-400"
		>
			<title>Switch to dark mode</title>
			<path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
		</svg>
	);
}

function MenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-label="Open menu"
			className="size-5 dark:stroke-gray-200"
		>
			<title>Open menu</title>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-label="Close menu"
			className="size-5 dark:stroke-gray-200"
		>
			<title>Close menu</title>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
