import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "49",
        description: "Perfect for small apartments",
        features: ["1 Bedroom Cleaning", "Kitchen Sanitizing", "Living Room Dusting", "Bathroom Cleaning"],
        highlight: false,
    },
    {
        name: "Standard",
        price: "99",
        description: "Best for medium size homes",
        features: ["3 Bedroom Cleaning", "Deep Kitchen Cleaning", "Windows Washing", "Carpet Vacuuming", "Bathroom Deep Clean"],
        highlight: true, // এটি হাইলাইটেড থাকবে
    },
    {
        name: "Premium",
        price: "149",
        description: "Complete house makeover",
        features: ["Full House Cleaning", "Furniture Polishing", "Curtain Steaming", "Disinfection Service", "Priority Schedule"],
        highlight: false,
    }
];

export default function Pricing() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">Pricing Plans</p>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A1D37]">
                        Choose your <span className="text-[#E85A2A]">plan</span>
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-10 rounded-3xl transition-all duration-500 flex flex-col ${plan.highlight
                                ? 'bg-[#0A1D37] text-white scale-105 shadow-2xl z-10'
                                : 'bg-slate-50 text-[#0A1D37] hover:shadow-xl'
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute top-0 right-10 -translate-y-1/2 bg-[#E85A2A] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-black mb-2 uppercase tracking-wider">{plan.name}</h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black">$</span>
                                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                                <span className={`text-sm font-bold ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/Visit</span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                                        <Check size={18} className={plan.highlight ? 'text-[#E85A2A]' : 'text-[#0A1D37]'} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className={`w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all ${plan.highlight
                                ? 'bg-[#E85A2A] text-white hover:bg-orange-600'
                                : 'bg-white border-2 border-slate-200 text-[#0A1D37] hover:border-[#E85A2A]'
                                }`}>
                                Book Now <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}