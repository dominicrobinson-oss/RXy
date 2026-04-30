const categories = [
	"Protein",
	"Creatine",
	"Bars, Food & Snacks",
	"Vitamins",
	"Pre-Workout",
];

export default function CategoryStrip() {
	return (
		<section className="w-full bg-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap gap-4 justify-center">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							className="px-4 py-3 text-lg font-semibold rounded-full border border-gray-300 hover:border-black transition"
						>
							{category}
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
