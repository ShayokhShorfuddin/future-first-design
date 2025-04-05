import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<main>
				<Hero />
			</main>
		</>
	);
}
