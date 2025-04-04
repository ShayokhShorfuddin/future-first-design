import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/introduction")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello Introduction</div>;
}
