const categories = [
	"Protein",
	"Creatine",
	"Activewear",
	"Bars, Food & Snacks",
	"Vitamins",
	"Pre-Workout",
];

export default function CategoryStrip() {
	return (
		<section className="w-full bg-white py-[22px]">
			<div className="mx-auto max-w-7xl overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar px-4 sm:px-6 lg:px-8 md:overflow-visible">
				<div className="mx-auto inline-flex w-max min-w-full items-center justify-start gap-3 md:grid md:w-full md:min-w-0 md:grid-cols-6 md:gap-4">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							className="mt-px rounded-lg bg-[#005462] px-7 py-[18px] text-lg font-normal uppercase tracking-[0.04em] text-white transition hover:bg-[#064653] md:w-full md:px-4 md:py-[16px] md:text-[17px]"
						>
							{category}
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
