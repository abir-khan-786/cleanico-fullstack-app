import React from 'react';
import { CheckCircle2, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">

            {/* ১. পেজ হেডার (Breadcrumb) */}
            <section className="bg-[#0A1D37] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">About <span className="text-[#E85A2A]">Us</span></h1>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Home / About Us</p>
            </section>

            {/* ২. কোম্পানি মিশন ও ইমেজ সেকশন */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                        alt="Cleaning Team"
                        className="rounded-3xl shadow-2xl relative z-10"
                    />
                    {/* অরেঞ্জ ডেকোরেশন বক্স */}
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E85A2A] rounded-3xl -z-0 hidden md:block"></div>
                </div>

                <div className="space-y-6">
                    <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em]">Our Story</p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A1D37] leading-tight">
                        We are specialized in <span className="text-[#E85A2A]">Professional</span> cleaning services
                    </h2>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        Since our founding, Cleanico has been dedicated to providing top-tier cleaning solutions. We believe a clean environment leads to a happier, healthier life. Our team uses eco-friendly products and the latest technology to ensure your home or office shines.
                    </p>

                    <ul className="space-y-3 pt-4">
                        {["Expert Team Members", "Eco-friendly Products", "100% Satisfaction Guarantee"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-bold text-[#0A1D37]">
                                <CheckCircle2 className="text-[#E85A2A]" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ৩. স্ট্যাটাস কাউন্টার (Stats) */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Target className="text-[#E85A2A]" />, count: "10+", label: "Years Experience" },
                        { icon: <Users className="text-[#E85A2A]" />, count: "50+", label: "Expert Cleaners" },
                        { icon: <Award className="text-[#E85A2A]" />, count: "2.5k", label: "Happy Clients" },
                        { icon: <CheckCircle2 className="text-[#E85A2A]" />, count: "100%", label: "Satisfaction" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:shadow-md transition-all">
                            <div className="mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <h3 className="text-3xl font-black text-[#0A1D37]">{stat.count}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ৪. আওয়ার টিম (Team Section) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">The Team</p>
                    <h2 className="text-4xl font-black text-[#0A1D37]">Meet Our <span className="text-[#E85A2A]">Experts</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((member) => (
                        <div key={member} className="group relative overflow-hidden rounded-3xl">
                            <img
                                src={`https://i.pravatar.cc/400?img=${member + 10}`}
                                alt="Team Member"
                                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-xl font-bold text-white">Expert Cleaner {member}</h4>
                                <p className="text-[#E85A2A] font-bold text-xs uppercase tracking-widest">Team Leader</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}