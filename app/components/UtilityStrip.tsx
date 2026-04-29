import { Smartphone, Truck, Star, Gift } from 'lucide-react';

const utilityItems = [
  {
    icon: Truck,
    text: 'Free standard delivery on £50 spend',
  },
  {
    icon: Smartphone,
    text: 'Extra 15% off via App',
  },
  {
    icon: Gift,
    text: 'Earn £15 credit with referrals',
  },
  {
    icon: Star,
    text: 'Over 210k reviews • Rated 4.4/5',
  },
];

export default function UtilityStrip() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2.5">
          {utilityItems.map((item) => (
            <p key={item.text} className="text-[11px] md:text-[12px] font-medium text-gray-700 leading-tight flex items-center gap-1.5 whitespace-nowrap">
              <item.icon size={12} className="text-[#0b4b59] shrink-0" />
              <span>{item.text}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
