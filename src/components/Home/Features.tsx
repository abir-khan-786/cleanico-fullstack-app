"use client";
import React, { useState } from 'react';
import { CheckCircle2, Plus, Minus, ShieldCheck, Clock, Award } from 'lucide-react';

const faqData = [
    {
        question: "How do I book a cleaning service?",
        answer: "You can book easily through our website by clicking the 'Get A Quote' button or by calling our customer service directly at (704) 555-0127."
    },
    {
        question: "Are your cleaners background checked?",
        answer: "Yes, every member of our team undergoes a rigorous background check and professional training to ensure your safety and quality of service."
    },
    {
        question: "What if I'm not satisfied with the cleaning?",
        answer: "Your satisfaction is our priority. If you're not happy, let us know within 24 hours and we will re-clean the area for free."
    }
];

export default function Features() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* ১. বাম পাশ: কেন আমাদের বেছে নেবেন (Features) */}
                <div className="space-y-8">
                    <div>
                        <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A1D37] mb-6 leading-tight">
                            We provide <span className="text-[#E85A2A]">expert</span> cleaning solutions
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            Cleanico is more than just a cleaning company. We are a team of dedicated professionals committed to making your life easier and your space healthier.
                        </p>
                    </div>

                    {/* Feature Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-4 rounded-xl bg-orange-50/50 hover:bg-orange-50 transition-colors">
                            <ShieldCheck className="text-[#E85A2A] shrink-0" size={28} />
                            <div>
                                <h4 className="font-bold text-[#0A1D37]">Fully Insured</h4>
                                <p className="text-xs text-slate-500">Your property is safe.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-orange-50/50 hover:bg-orange-50 transition-colors">
                            <Clock className="text-[#E85A2A] shrink-0" size={28} />
                            <div>
                                <h4 className="font-bold text-[#0A1D37]">24/7 Support</h4>
                                <p className="text-xs text-slate-500">Always here for you.</p>
                            </div>
                        </div>
                    </div>

                    {/* Check List */}
                    <ul className="space-y-4 pt-4">
                        {["Eco-friendly cleaning products", "Professional and trained staff", "Cost-effective pricing plans"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                                <CheckCircle2 className="text-[#E85A2A]" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ২. ডান পাশ: FAQ Accordion */}
                <div className="bg-[#0A1D37] p-8 md:p-12 rounded-3xl shadow-2xl text-white">
                    <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Common Questions</h3>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-white/10 pb-4 last:border-0">
                                <button
                                    className="w-full flex justify-between items-center text-left py-2 group"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className={`font-bold transition-colors ${openIndex === index ? 'text-[#E85A2A]' : 'text-white group-hover:text-slate-300'}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? <Minus size={18} className="text-[#E85A2A]" /> : <Plus size={18} />}
                                </button>
                                {openIndex === index && (
                                    <div className="mt-3 text-slate-400 text-sm leading-relaxed animate-in fade-in duration-300">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}