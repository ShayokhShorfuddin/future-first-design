import { Link } from "@tanstack/react-router";
import HeroCard from "./HeroCard";

const tweetPlaceholder =
	"@shayokh_dev\nFuture-First Design looks kinda cool.\nMight give it a try.\n\n#FutureFirstDesign";
const encodedText = encodeURIComponent(tweetPlaceholder);

const HeroCardContents: {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
}[] = [
	{
		icon: <VoltIcon />,
		title: "Resilient",
		subtitle: "Embraces resilience to changes in technology and user needs.",
	},
	{
		icon: <AccessibilityIcon />,
		title: "Accessible",
		subtitle: "Puts accessibility first to ensure seamless user experience.",
	},
	{
		icon: <CodeIcon />,
		title: "Framework-agnostic",
		subtitle: "Easy adaptation regardless of preferred framework or library.",
	},
	{
		icon: <WebIcon />,
		title: "Web Standards",
		subtitle:
			"Upholds classic web standards for performance and compatibility.",
	},
];

export default function Hero() {
	return (
		<section
			className="m-h-svh container mx-auto mt-14 sm:mt-20"
			aria-label="A small introduction to Future-First Design. This section also contains links to get started and tweeting about this philosophy."
		>
			<div className="flex flex-col items-center gap-y-7 px-5">
				<div className="relative flex flex-col items-center gap-y-4">
					<h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold dark:text-neutral-200">
						Future-First Design
					</h1>

					<p className="text-sm xs:text-base font-semibold text-center text-neutral-600 dark:text-neutral-400">
						An architectural philosophy for robust,{" "}
						<br className="hidden xs:block sm:hidden" />
						future-proof frontend applications.
					</p>

					<TerminalIcon />
					<RocketIcon />
				</div>

				<div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
					<Link
						to="/introduction"
						className="rounded-full bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-250 hover:cursor-pointer py-2 px-4 text-sm font-semibold text-white text-nowrap"
					>
						Get Started
					</Link>

					<a
						className="rounded-full bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-250 hover:cursor-pointer py-2 px-4 text-sm font-semibold text-white text-nowrap flex items-center gap-x-2"
						target="_blank"
						rel="noopener noreferrer"
						href={`https://twitter.com/intent/tweet?text=${encodedText}`}
					>
						<NonReactiveXIcon />
						<span>Tweet About It!</span>
					</a>
				</div>

				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 grid-rows-1 mt-12 xs:mt-20 gap-x-5 gap-y-5">
					{HeroCardContents.map((card) => (
						<HeroCard key={card.title} {...card} />
					))}
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
			className="hidden md:block absolute top-6 -left-10 -rotate-6 size-7 dark:stroke-neutral-300"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
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
			className="hidden md:block absolute top-6 -right-10 size-7 dark:stroke-neutral-300"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
			/>
		</svg>
	);
}

// Non reactive because it doesn't respond to hover events
export function NonReactiveXIcon() {
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

function VoltIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			className="size-6 fill-neutral-800 dark:fill-neutral-100"
		>
			<path
				fillRule="evenodd"
				d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function AccessibilityIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-hidden="true"
			className="size-6 fill-neutral-800 dark:fill-neutral-100"
		>
			<path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z" />
		</svg>
	);
}

function CodeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			className="size-6 fill-neutral-800 dark:fill-neutral-100"
		>
			<path
				fillRule="evenodd"
				d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function WebIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			className="size-6 fill-neutral-800 dark:fill-neutral-100"
		>
			<path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
		</svg>
	);
}
