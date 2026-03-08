"use client";

import React from 'react';
import { authClient } from "@/src/lib/auth-client";
import { Calendar, CheckCircle, Clock, Star, ArrowRight, Command } from 'lucide-react';

export default function DashboardPage() {
    const { data: session } = authClient.useSession();

    const stats = [
        { label: 'Active Bookings', value: '03', icon: <Clock className="text-blue-500" />, color: 'bg-blue-50' },
        { label: 'Completed Tasks', value: '12', icon: <CheckCircle className="text-green-500" />, color: 'bg-green-50' },
        { label: 'Pandding', value: '5', icon: <Command className="text-orange-500" />, color: 'bg-orange-50' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* ওয়েলকাম কার্ড */}
            <div className="bg-[#0A1D37] rounded-[32px] p-10 text-white relative overflow-hidden">
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-3xl font-black leading-tight">Good Morning, <br />{session?.user?.name || "Member"}!</h2>
                    <p className="text-slate-400 mt-4 font-medium">Your next house cleaning is scheduled for tomorrow at 10:00 AM. Get your home ready!</p>
                    <button className="mt-8 bg-[#E85A2A] hover:bg-orange-600 px-8 py-3 rounded-2xl font-black text-sm transition-all flex items-center gap-2 group">
                        Book New Service <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                {/* ডেকোরেটিভ ডিজাইন */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 right-20 w-32 h-32 bg-[#E85A2A]/20 rounded-full blur-2xl"></div>
            </div>

            {/* স্ট্যাটস গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
                        <div className={`${stat.color} p-4 rounded-2xl`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                            <h4 className="text-2xl font-black text-[#0A1D37] mt-1">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* রিসেন্ট অ্যাক্টিভিটি এবং ছোট ক্যালেন্ডার সেকশন */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-slate-100">
                    <h3 className="text-lg font-black text-[#0A1D37] mb-6 flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-[#E85A2A] rounded-full"></div>
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-[#0A1D37]">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm text-[#0A1D37]">Deep Kitchen Cleaning</h5>
                                        <p className="text-xs text-slate-400 font-medium">Completed on 12th Feb, 2026</p>
                                    </div>
                                </div>
                                <span className="text-xs font-black text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase tracking-tighter">Paid</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#E85A2A] rounded-[32px] p-8 text-white flex flex-col items-center justify-center text-center shadow-lg shadow-orange-500/20">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                        <Star size={32} />
                    </div>
                    <h4 className="font-black text-xl mb-2">Refer & Earn</h4>
                    <p className="text-white/80 text-sm font-medium mb-6">Invite your friends and get 20% off on your next booking.</p>
                    <button className="w-full bg-white text-[#E85A2A] py-4 rounded-2xl font-black text-sm hover:scale-[1.02] transition-all">
                        Invite Friends
                    </button>
                </div>
            </div>
        </div>
    );
}