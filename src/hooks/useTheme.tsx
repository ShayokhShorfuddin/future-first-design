import { useEffect, useState } from "react";

export function useTheme(): { theme: string; toggleTheme: () => void } {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	// Get the root <html> element
	const rootHTML: HTMLElement = document.documentElement;

	useEffect(() => {
		// Appending/removing the dark class based on the theme
		if (theme === "dark") {
			rootHTML.classList.add("dark");
		} else {
			rootHTML.classList.remove("dark");
		}

		// Persist the theme in localStorage
		localStorage.setItem("theme", theme);
	}, [theme, rootHTML]);

	// Toggle between "dark" and "light" themes
	const toggleTheme = (): void => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return { theme, toggleTheme };
}
