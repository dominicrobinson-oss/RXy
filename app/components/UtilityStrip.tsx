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
    <section className="bg-[#f3f4f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-1.5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-2">
          {utilityItems.map((item) => (
            <p key={item.text} className="text-[11px] md:text-[12px] font-semibold text-gray-800 leading-tight flex items-center gap-1.5">
              <item.icon size={13} className="text-[#0b4b59] shrink-0" />
              <span>{item.text}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
