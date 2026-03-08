"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, LogIn, User } from 'lucide-react';
import Link from 'next/link';
import { authClient } from '@/src/lib/auth-client';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    if (isPending) return <p>Loading...........</p>

    return (
        <header className="w-full relative z-[100]">
            {/* 1. Top Bar - মোবাইলে ছোট দেখাবে */}
            <div className="bg-[#E85A2A] text-white py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[11px] md:text-[13px] gap-2">
                <div className="flex gap-4 md:gap-6">
                    <span className="flex items-center gap-1.5"><Phone size={14} /> (704) 555-0127</span>
                    <span className="flex items-center gap-1.5 uppercase font-medium"><Mail size={14} /> cleaningbd@gmail.com</span>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <MapPin size={14} /> 6391 Elgin St. Celina, Delaware 10299
                </div>
            </div>

            {/* 2. Main Nav */}
            <nav className="flex justify-between items-center py-4 px-4 md:px-12 bg-white border-b shadow-sm">
                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-black text-[#0A1D37]">
                    <div className="bg-[#E85A2A] p-1 rounded-sm shadow-sm">
                        <CheckCircle size={24} className="text-white" strokeWidth={3} />
                    </div>
                    Cleanico
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-bold text-slate-600 text-[15px]">
                    <a href="#" className="hover:text-[#E85A2A] transition-colors">About</a>
                    <a href="#" className="hover:text-[#E85A2A] transition-colors">Services</a>
                    <a href="#" className="hover:text-[#E85A2A] transition-colors">Resources</a>
                    <a href="#" className="hover:text-[#E85A2A] transition-colors">Reviews</a>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block bg-[#0A1D37] text-white px-6 py-2.5 rounded font-bold hover:bg-slate-800 transition shadow-md">
                        Contact
                    </button>

                    <Link href={"/profile"} className="hidden sm:block bg-[#0A1D37] text-white px-6 py-2.5 rounded font-bold hover:bg-slate-800 transition shadow-md">
                        <User size={20} /> {session?.user.name}
                    </Link>
                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-md transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* 3. Mobile Drawer Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b shadow-2xl md:hidden flex flex-col p-6 space-y-4 font-bold text-slate-700 animate-in slide-in-from-top duration-300">
                    <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#E85A2A] py-3 border-b border-slate-50">About</a>
                    <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#E85A2A] py-3 border-b border-slate-50">Services</a>
                    <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#E85A2A] py-3 border-b border-slate-50">Resources</a>
                    <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#E85A2A] py-3 border-b border-slate-50">Reviews</a>
                    <button className="bg-[#E85A2A] text-white py-4 rounded-md shadow-lg">Get A Quote</button>
                </div>
            )}
        </header>
    );
}