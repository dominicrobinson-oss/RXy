'use client';

import { Truck, Gift, Beaker, CheckCircle2 } from 'lucide-react';

const usp = [
  { icon: Truck, text: 'Free standard delivery on £50 spend' },
  { icon: Gift, text: 'Extra 15% off via App' },
  { icon: Beaker, text: 'Earn £15 Credit?' },
  { icon: CheckCircle2, text: 'Over 210k reviews & 4.4 rated' },
];

export default function USPBar() {
  return (
    <section className="bg-gray-100 py-2 border-y border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usp.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon size={16} className="text-blue-600 shrink-0" />
                <p className="text-[11px] md:text-[13px] font-semibold text-gray-800 leading-tight">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
