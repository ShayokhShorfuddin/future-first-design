import { Link } from "@tanstack/react-router";
import { GithubIcon, XIcon } from "./Navbar";

// Navigation dropdown for mobile devices
export function NavigationDropdown({
	backgroundColor,
}: { backgroundColor: string }) {
	return (
		<div
			className="border border-stone-700 rounded-xl px-4 py-3 w-min"
			style={{ backgroundColor: backgroundColor }}
		>
			<ul className="space-y-2.5">
				<li>
					<Link to="/">
						<p className="text-sm text-nowrap">Home</p>
					</Link>
				</li>
				<li>
					<Link to="/introduction">
						<p className="text-sm text-nowrap">Introduction</p>
					</Link>
				</li>
				<li>
					<Link to="/faq">
						<p className="text-sm text-nowrap">FAQ</p>
					</Link>
				</li>
				<li>
					<div className="flex items-center gap-x-3 mt-5">
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
				</li>
			</ul>
		</div>
	);
}
