import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[650px] w-full overflow-hidden">
            {/* ১. বাম পাশের কন্টেন্ট (Dark Blue Section) */}
            <div className="flex-1 bg-[#0A1D37] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
                {/* ছোট ব্যাজ বা ট্যাগ */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-[#E85A2A] px-4 py-1.5 text-[10px] md:text-xs font-black rounded uppercase tracking-widest shadow-lg">
                        #1 Cleaning Service
                    </span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-2 group cursor-pointer">
                        Maintenance Expert <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>

                {/* মেইন হেডিং */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                    Quick <span className="text-[#E85A2A]">Cleaning</span> <br className="hidden lg:block" />
                    of the Apartment
                </h1>

                {/* সাব-টেক্সট */}
                <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed font-medium">
                    The never that by but entire twists in attend Also our continued in
                    four ten head mountains, great there half dozen good.
                </p>

                {/* কল টু অ্যাকশন বাটন */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#E85A2A] px-10 py-4 rounded-md font-black text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(232,90,42,0.3)]">
                        Get A Quote
                    </button>
                    {/* আপনি চাইলে এখানে একটি প্লে বাটন বা ফোন নম্বরও রাখতে পারেন */}
                </div>

                {/* ডেকোরেশন (ঐচ্ছিক: ব্যাকগ্রাউন্ডে হালকা ডিজাইন) */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16 blur-3xl text-white"></div>
            </div>

            {/* ২. ডান পাশের ইমেজ (Image Section) */}
            <div className="flex-1 relative min-h-[350px] md:min-h-full">
                <img
                    src="https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional Cleaner"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* ছবির উপরে হালকা ওভারলে (মোবাইলের জন্য) */}
                <div className="absolute inset-0 bg-black/10 md:hidden"></div>
            </div>
        </section>
    );
}