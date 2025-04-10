export default function Footer() {
	return (
		<footer className="mt-16 mb-5">
			<p className="text-center text-sm font-inter font-medium text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Released under the MIT License.
				<br />
				Copyright &#169; {new Date().getFullYear()} Shayokh Shuvro.
			</p>
		</footer>
	);
}
