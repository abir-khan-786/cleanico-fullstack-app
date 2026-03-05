import React from 'react';
import { Home, Building2, Hotel, Brush, Waves } from 'lucide-react';

const services = [
    {
        title: "Cleaning House",
        icon: <Home size={40} className="text-[#E85A2A] group-hover:text-white transition-colors" />,
        active: false
    },
    {
        title: "Office Cleaning",
        icon: <Building2 size={40} className="text-[#E85A2A] group-hover:text-white transition-colors" />,
        active: false
    },
    {
        title: "House Services",
        icon: <Brush size={40} className="text-white" />,
        active: true // হাইলাইটেড কার্ড
    },
    {
        title: "Hotel Cleaning",
        icon: <Hotel size={40} className="text-[#E85A2A] group-hover:text-white transition-colors" />,
        active: false
    },
    {
        title: "Window Washing",
        icon: <Waves size={40} className="text-[#E85A2A] group-hover:text-white transition-colors" />,
        active: false
    }
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">Our Services</p>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A1D37]">
                        What are we <span className="text-[#E85A2A]">cleaning</span>
                    </h2>
                </div>

                {/* Cards Grid: 5টির জন্য রেসপন্সিভ গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative group p-8 rounded-2xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer
                            ${service.active
                                    ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t-8 border-[#E85A2A] scale-105 lg:scale-110 z-10'
                                    : 'bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 border-t-8 border-transparent'
                                }`}
                        >
                            {/* Icon Container */}
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500
                                ${service.active
                                    ? 'bg-[#E85A2A] shadow-[0_10px_20px_rgba(232,90,42,0.4)]'
                                    : 'bg-orange-50 group-hover:bg-[#E85A2A]'
                                }`}
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className={`text-lg font-black leading-tight transition-colors duration-500 ${service.active ? 'text-[#0A1D37]' : 'text-slate-700 group-hover:text-[#E85A2A]'}`}>
                                {service.title}
                            </h3>

                            {/* Decoration Circle */}
                            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#E85A2A] transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}