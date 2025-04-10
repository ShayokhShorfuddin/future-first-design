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
						developers approach modern frontend architecture, they have also
						fostered a growing trend of frequent migrations and rewriting. Among
						all this, the essence of web is often kept aside. Things like
						accessibility, web standards, and other aspects that make the web a
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
					<div className="md:ml-10">
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
								<a
									className="underline"
									href="https://momentjs.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									moment.js
								</a>{" "}
								for date formatting. According to{" "}
								<a
									className="underline"
									href="https://bundlephobia.com/package/moment@2.30.1"
									target="_blank"
									rel="noreferrer noopener"
								>
									Bundlephobia
								</a>
								, it is 73.1 kB (minified + gzipped) in size and potentially
								takes up to 1.46 seconds to be downloaded by the client's
								browser on slow 3G network (50kB/s).
								<br /> <br />
								In this scenario, a better alternative would be to use{" "}
								<a
									className="underline"
									href="https://day.js.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
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

						<div className="mb-20">
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
									target="_blank"
									rel="noreferrer noopener"
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

						<div className="mb-20">
							<h2 className="text-3xl dark:text-neutral-200 font-inter font-semibold mb-6">
								3. Web Accessibility
							</h2>

							<p className="dark:text-neutral-400 font-inter">
								Everyone deserves to experience the web comfortably regardless
								of their health condition or disability. According to the{" "}
								<a
									className="underline"
									href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
									target="_blank"
									rel="noreferrer noopener"
								>
									World Health Organization (WHO)
								</a>
								, an estimated 1.3 billion people - or 16% of the global
								population experience a significant disability.
								<br /> <br />
								Unfortunately, web accessibility remains a gray area for many
								developers. In the fast-moving world of campaigns, product
								releases, and tight deadlines, developers find themselves with a
								serious time deficit, pressure to deliver, and usually no
								advocate for building in accessibility. By designing for
								disabilities, everyone's issues start to get resolved,
								accounting for requirements that might not have even been
								considered before. Moreover, focusing on accessibility also
								improves SEO and other key metrics.
								<br /> <br />
								United Nations Secretary-General António Guterres has called for
								universal access to the Internet to be a basic human right by
								2030. Laws like UK's Equality Act (2010) and 1990 Americans with
								Disabilities Act (ADA). Failing to comply with these laws can
								lead to hefty fines and legal action.
								<br /> <br />
								For instance, in January 2019, multi-platinum singer/songwriter
								Beyoncé's official website was hit by a class action lawsuit for
								violating the 1990 Americans with Disabilities Act (ADA). A
								lawsuit was filed against her company to ensure website
								accessibility and to seek damages for individuals who had
								experienced unlawful discrimination.
							</p>

							<ul className="list-disc list-inside mt-7">
								<li className="dark:text-neutral-400 font-inter">
									Ensure compliance with WCAG level AA and aim for level AAA.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Implement keyboard-only natural navigation.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Frequently examine accessibility scores.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Build awareness within your team.
								</li>
							</ul>
						</div>

						<div className="mb-20">
							<h2 className="text-3xl dark:text-neutral-200 font-inter font-semibold mb-6">
								4. Mobile Friendly Approach
							</h2>

							<p className="dark:text-neutral-400 font-inter">
								According to the 2024 Web Almanac by HTTP Archive, there are
								6.61 billion mobile users worldwide, and 69.4% of the world's
								total population uses a mobile device. Google Search has
								considered mobile-friendliness to be a requirement since 2015.{" "}
								<a
									className="underline"
									href="https://www.mobiloud.com/blog/what-percentage-of-internet-traffic-is-mobile"
									target="_blank"
									rel="noreferrer noopener"
								>
									Mobiloud
								</a>{" "}
								insists that mobile devices make up 62.45% of global internet
								traffic.
								<br /> <br />
								Ensuring that your web applications adapt to all device screens
								and orientations is a must. After analyzing the Chrome User
								Experience Report (CrUX) public dataset, 2024 Web Almanac
								revealed that only 48% of mobile sites passed the Core Web
								Vitals (CWV) metrics.
								<br /> <br />
								Generally speaking, modern-day sites are built and tested on
								wide screens like desktops and laptops. From the very beginning,
								pixel-perfect appearance on large screens has remained as the
								primary goal. Only afterwards, responsiveness is taken into
								account and implemented.
							</p>

							<ul className="list-disc list-inside mt-7">
								<li className="dark:text-neutral-400 font-inter">
									Visualize your applications on both desktop and mobile
									side-by-side during development.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Analyze user experience on different emulated devices and
									orientations.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Run performance tests on physical low-end mobile devices.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Ensure all interactive elements respond to touch.
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl dark:text-neutral-200 font-inter font-semibold mb-6">
								5. Low Carbon Emission
							</h2>

							<p className="dark:text-neutral-400 font-inter">
								Amidst all the trends and race to build the next big thing, the
								environmental impact of web applications is something unheard of
								among many developers. More data needs more servers to store
								them, more energy to deliver them, and more processing power to
								display them on-screen to end users.
								<br /> <br />
								According to the 2024 Web Almanac, on the 90th percentile, the
								average mobile site weighs around 7.2 MB, while desktop ones are
								around 8 MB. What's concerning is that on this percentile, web
								applications are contributing 1.36 grams of{" "}
								<a
									className="underline"
									href="https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Carbon_dioxide_equivalent"
									target="_blank"
									rel="noreferrer noopener"
								>
									EqCO2
								</a>
								, and this number is rising rapidly every year.
								<br /> <br />
								Such acceleration is not surprising, considering the increasing
								deployment of bloated and unoptimized codebases. In the end, our
								environment takes the hit, which could have been avoided from
								the very beginning.
							</p>
							<ul className="list-disc list-inside mt-7">
								<li className="dark:text-neutral-400 font-inter">
									Minimize or cache computationally heavy and resource-intensive
									tasks whenever possible.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Implement efficient design systems that require minimal CPU
									usage.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Deliver assets only when they are truly needed by the client.
								</li>
								<li className="dark:text-neutral-400 font-inter">
									Deploy your applications on{" "}
									<a
										className="underline"
										href="https://www.thegreenwebfoundation.org/tools/directory/"
										target="_blank"
										rel="noreferrer noopener"
									>
										green hosting providers
									</a>
									.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div>
					<h1 className="text-4xl dark:text-neutral-200 font-inter font-semibold mb-6">
						Symbiosis
					</h1>

					<p className="dark:text-neutral-400 font-inter">
						The beauty of Future-First Design remains within its core values.
						They are not standalone but rather interconnected, establishing a
						reciprocal relationship where embracing one of the core values
						naturally facilitates alignment with the others.
						<br /> <br />
						Prioritizing native implementation, for instance, not only leads to
						a more efficient codebase but also contributes to low resource
						compatibility. Shipping the efficient codebase to stay resilient on
						underpowered mobile devices ensures a minimalistic carbon footprint
						and a more inclusive user experience.
					</p>
				</div>

				<div>
					<h1 className="text-4xl dark:text-neutral-200 font-inter font-semibold mb-6">
						Conclusion
					</h1>

					<p className="dark:text-neutral-400 font-inter">
						The web is an ever-evolving landscape. It's not just about keeping
						pace with the latest frameworks or chasing trends—it's about
						creating digital experiences that withstand the test of time and
						honor the web's original promise: to connect humanity. So as you
						return to your projects, carry these values with you. Together, we
						can build a more inclusive and sustainable web for everyone, for the
						future.
					</p>
				</div>
			</div>
		</section>
	);
}
