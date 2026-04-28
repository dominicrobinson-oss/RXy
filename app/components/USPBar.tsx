'use client';

import { Truck, Gift, Beaker, CheckCircle2 } from 'lucide-react';

const usp = [
  { icon: Truck, text: 'Crafted by Healthcare Professionals' },
  { icon: Gift, text: 'Subscribe & Save 15%' },
  { icon: Beaker, text: 'Lab Tested & Verified' },
  { icon: CheckCircle2, text: '100% Money Back Guarantee' },
];

export default function USPBar() {
  return (
    <section className="bg-gray-50 py-8 border-y">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {usp.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <Icon size={32} className="text-blue-600" />
                <p className="text-sm font-semibold text-gray-800">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
