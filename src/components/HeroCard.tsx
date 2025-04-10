type HeroCardProp = {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
};

export default function HeroCard({ icon, title, subtitle }: HeroCardProp) {
	return (
		<div className="flex flex-col border border-neutral-400 dark:border-0 dark:bg-neutral-800 w-full rounded-xl p-5 gap-y-5">
			{icon}

			<div className="flex flex-col gap-y-1">
				<p className="dark:text-neutral-300 font-semibold">{title}</p>
				<p className="text-sm text-neutral-700 dark:text-neutral-400">
					{subtitle}
				</p>
			</div>
		</div>
	);
}
