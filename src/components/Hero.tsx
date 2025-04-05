import { Link } from "@tanstack/react-router";

export default function Hero() {
	const tweetPlaceholder =
		"@shayokh_dev\nFuture-First Design looks kinda cool.\nMight give it a try.\n\n#FutureFirstDesign";
	const encodedText = encodeURIComponent(tweetPlaceholder);

	return (
		<section
			className="container mx-auto mt-20"
			aria-label="A small introduction to Future-First Design. This section also contains links to get started and tweeting about this philosophy."
		>
			<div className="flex flex-col items-center gap-y-7">
				<div className="relative flex flex-col items-center gap-y-4">
					<h1 className="text-6xl text-center font-inter font-semibold dark:text-neutral-200">
						Future-First Design
					</h1>

					<p className="font-inter font-semibold text-neutral-600 dark:text-neutral-500">
						An architectural philosophy for resilient, future-proof frontend
						applications.
					</p>

					<TerminalIcon />
					<RocketIcon />
				</div>

				<div className="flex items-center gap-x-5">
					<Link
						to="/introduction"
						className="rounded-full bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-250 hover:cursor-pointer py-2 px-4 text-sm font-inter font-semibold text-white"
					>
						Get Started
					</Link>

					<a
						className="rounded-full bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-250 hover:cursor-pointer py-2 px-4 text-sm font-inter font-semibold text-white flex items-center gap-x-2"
						target="_blank"
						rel="noopener noreferrer"
						href={`https://twitter.com/intent/tweet?text=${encodedText}`}
					>
						<XIcon />
						<span>Tweet About It!</span>
					</a>
				</div>
			</div>
		</section>
	);
}

function TerminalIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			aria-hidden="true"
			className="absolute top-6 -left-8 -rotate-6 size-7 dark:stroke-neutral-300"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
			/>
		</svg>
	);
}

function RocketIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			aria-hidden="true"
			className="absolute top-6 -right-8 size-7 dark:stroke-neutral-300"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
			/>
		</svg>
	);
}

function XIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-hidden="true"
			className="w-5 fill-neutral-100"
		>
			<title>X (formerly Twitter)</title>
			<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
		</svg>
	);
}
