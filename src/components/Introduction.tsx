export default function Introduction() {
	return (
		<section
			className="container mx-auto mt-14 sm:mt-20"
			aria-label="This section presents a deep-dive into the key points behind Future-First Design. Each point has been explained in detail along with some statistical data and real-world examples."
		>
			<div className="flex flex-col max-w-5xl mx-auto gap-y-20 sm:gap-y-24 px-5">
				<div>
					<h1 className="text-4xl dark:text-neutral-200 font-inter font-semibold mb-6">
						Modern Frontend
					</h1>

					<p className="dark:text-neutral-400 font-inter">
						The world of frontend development has never witnessed such
						acceleration before. Every now and then, brand-new frameworks, sleek
						UI component libraries, and exciting technologies are emerging, with
						several claiming to revolutionize the web ecosystem and enhance the
						developer experience (DX).
						<br /> <br />
						While such advancements are great for the betterment of how
						developers approach modern frontend architecture, they has also
						fostered a growing trend of frequent migrations and rewriting. Among
						all this, the essence of web is often kept aside. Things like
						Accessibility, Web Standards, and other aspects that make the web a
						vibrant place.
						<br /> <br />
						Future-First Design aims to address this by offering a set of
						framework-agnostic guidelines and values, allowing developers to
						build and ship quality frontend applications regardless of industry
						shifts in the near future.
					</p>
				</div>

				<div>
					<p className="text-4xl dark:text-neutral-200 font-inter font-semibold mb-6">
						Core Values
					</p>
					<p className="dark:text-neutral-400 font-inter">
						For ease of understanding and implementation, Future-First Design
						(FFD) philosophy consists of 5 core values. Adhering to these values
						during development will ensure your applications reach their full
						potential and are future-ready.
					</p>
					<br /> <br />
					<div className="ml-6 md:ml-10">
						<div className="mb-20">
							<h2 className="text-3xl dark:text-neutral-200 font-inter font-semibold mb-6">
								1. Low Resource Compatibility
							</h2>

							<p className="dark:text-neutral-400 font-inter">
								Majority of current web applications tend to have heavy
								dependencies and often require more resources to function than
								necessary. Unoptimized assets, large libraries, verbose
								stylesheets, and excessive JavaScript, just to name a few.
								<br /> <br />
								All of your users may not have access to a decent machine or a
								stable internet connection. Future-First Design philosophy
								reminds that to developers. Applications must be designed in
								such a manner that they achieve expected behavior using minimal
								resources and limited bandwidth.
								<br /> <br />
								For instance, imagine a web application that depends on{" "}
								<a className="underline" href="https://momentjs.com/">
									moment.js
								</a>{" "}
								for date formatting. According to{" "}
								<a
									className="underline"
									href="https://bundlephobia.com/package/moment@2.30.1"
								>
									bundlephobia
								</a>
								, it is 73.1 kB (minified + gzipped) in size and potentially
								takes up to 1.46 seconds to be downloaded by the client's
								browser on slow 3G network (50kB/s).
								<br /> <br />
								In this scenario, a better alternative would be to use{" "}
								<a className="underline" href="https://day.js.org/">
									day.js
								</a>
								, a lightweight 3 kB (minified + gzipped) library and takes only
								up to 59ms on slow 3G network.
							</p>

							<ul className="list-disc list-inside mt-7">
								<li className="dark:text-neutral-400 font-inter">
									Prune unnecessary dependencies and dead-code.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Compress and optimize static assets.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Ship as low JavaScript as possible.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Make minimal network requests.
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl dark:text-neutral-200 font-inter font-semibold mb-6">
								2. Native Implementation
							</h2>

							<p className="dark:text-neutral-400 font-inter">
								Due to the widespread availability and ease of integration,
								developers often go for heavyweight UI Component libraries even
								for a{" "}
								<a
									className="underline"
									href="https://bundlephobia.com/package/@radix-ui/react-slot@1.1.2"
								>
									button
								</a>
								. While these libraries do provide a rich set of complex
								components, they also introduce unintended bloat and overhead
								for the end users.
								<br /> <br />
								Such overreliance has another side effect that usually goes
								unseen. A slow decline in frontend developers' understanding of
								the underlying principles and intricacies involved in designing
								complex components.
								<br /> <br />
								Before resorting to a UI Component library for a specific
								component, examine if it can be implemented natively using
								HTML/JSX/TSX and CSS. Natively implemented components usually
								result in lighter, maintainable code blocks whilst allowing
								developers a deeper understanding of their systems.
							</p>

							<ul className="list-disc list-inside mt-7">
								<li className="dark:text-neutral-400 font-inter">
									Prioritize implementing small components natively.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Make minimal use of UI Component libraries.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Understand your project's design system.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Audit component sizes regularly.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
