import { createFileRoute } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

export const Route = createFileRoute("/introduction")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<title>Introduction | Future-First Design</title>

			<main>
				<Introduction />
			</main>

			<Footer />
		</>
	);
}
