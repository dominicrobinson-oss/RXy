import Image from 'next/image';

const whatsNew = [
  {
    title: 'Brand Hub Launch Edit',
    desc: 'Fresh campaigns, new formulations, and training-focused product drops.',
  },
  {
    title: 'Performance Meets Style',
    desc: 'Daily activewear essentials engineered for comfort and movement.',
  },
  {
    title: 'Nutrition Upgrades',
    desc: 'Improved blends with cleaner flavour profiles and easy-mix textures.',
  },
];

const gymBagEssentials = [
  {
    name: 'Impact Whey Isolate',
    image: 'https://images.unsplash.com/photo-1584124864456-cbbf17f3049e?w=600&h=600&fit=crop',
  },
  {
    name: 'Shaker Bottle',
    image: 'https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=600&h=600&fit=crop',
  },
  {
    name: 'Training Towel',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
  },
  {
    name: 'Pre-Workout',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
  },
];

const newInDrops = [
  {
    name: 'Performance Joggers',
    subtitle: 'New Season Activewear',
  },
  {
    name: 'Clear Whey Peach Mango',
    subtitle: 'Limited flavour release',
  },
  {
    name: 'Gym Bag Pro 2.0',
    subtitle: 'Smart storage redesign',
  },
];

const faqs = [
  {
    question: 'How quickly will my order arrive?',
    answer: 'Standard delivery is available, with free next-day delivery offers on selected campaigns.',
  },
  {
    question: 'Can I combine discount codes?',
    answer: 'Only one promotional code can usually be applied per order unless explicitly stated.',
  },
  {
    question: 'Where can I find allergen information?',
    answer: 'All allergen and ingredient details are available on each individual product page.',
  },
];

export default function BrandHubSections() {
  return (
    <section className="py-12 md:py-14 bg-[#f7f8fa] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#123742] mb-4">WHAT’S NEW</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {whatsNew.map((item) => (
              <article key={item.title} className="bg-white rounded-md border border-gray-200 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#123742] mb-4">NEW IN</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {newInDrops.map((item) => (
              <article key={item.name} className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0b4b59]">NEW IN</p>
                <h3 className="font-bold text-gray-900 mt-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#123742] mb-4">Gym Bag Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymBagEssentials.map((item) => (
              <article key={item.name} className="rounded-md border border-gray-200 bg-white overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                <div className="relative h-36 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#123742] mb-4">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="bg-white border border-gray-200 rounded-md p-4 group shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#0b4b59] group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
