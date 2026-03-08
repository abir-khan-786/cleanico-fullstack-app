"use client";

import React, { useEffect } from 'react';
import { authClient } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";
import {
    User, Mail, LogOut, ShieldCheck,
    Settings, Calendar, Bell, Loader2
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    // সেশন না থাকলে রিডাইরেক্ট করার সঠিক উপায়
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }
    }, [session, isPending, router]);

    // ডাটা লোড হওয়া পর্যন্ত ওয়েট করুন
    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="animate-spin text-[#E85A2A]" size={40} />
            </div>
        );
    }

    // সেশন না থাকলে কিছু দেখানোর দরকার নেই, কারণ useEffect রিডাইরেক্ট করে দেবে
    if (!session) {
        return null;
    }


    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="animate-spin text-[#E85A2A]" size={40} />
            </div>
        );
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const user = session.user;

    const handelSingOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    return (
        <section className="min-h-screen bg-slate-50 pb-12">
            {/* টপ নেভিগেশন স্টাইল হেডার */}
            <div className="bg-[#0A1D37] h-48 w-full relative">
                <div className="max-w-4xl mx-auto px-6 pt-8 flex justify-between items-center">
                    <h1 className="text-white font-black text-xl tracking-tight">Cleanico Portal</h1>
                    <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all relative">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-[#E85A2A] rounded-full border-2 border-[#0A1D37]"></span>
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 -mt-20">
                <div className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">

                    {/* প্রোফাইল মেইন সেকশন */}
                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-[28px] bg-slate-100 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                                {user.image ? (
                                    <img src={user.image} alt={user.name || "User"} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={48} className="text-slate-300" />
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                                <ShieldCheck size={14} className="text-white" />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-black text-[#0A1D37] leading-none mb-2">
                                {user.name || "Cleanico Member"}
                            </h2>
                            <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                                <Mail size={16} /> {user.email}
                            </p>
                            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-1.5 bg-orange-50 text-[#E85A2A] text-xs font-black uppercase tracking-wider rounded-full border border-orange-100">
                                    Member Since {new Date(user.createdAt).getFullYear()}
                                </span>
                                <span className="px-4 py-1.5 bg-blue-50 text-[#0A1D37] text-xs font-black uppercase tracking-wider rounded-full border border-blue-100">
                                    Status: Active
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handelSingOut}
                            className="bg-red-50 text-red-600 p-4 rounded-2xl hover:bg-red-100 transition-all group"
                            title="Sign Out"
                        >
                            <LogOut size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* কুইক অ্যাকশন কার্ডস */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-50">
                        <div className="p-8 border-b md:border-b-0 md:border-r border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <Calendar className="text-[#E85A2A] mb-4" size={28} />
                            <h3 className="font-black text-[#0A1D37] text-sm uppercase tracking-wide">My Bookings</h3>
                            <p className="text-slate-400 text-xs mt-1 font-medium">Manage your cleaning schedules</p>
                        </div>
                        <div className="p-8 border-b md:border-b-0 md:border-r border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <Settings className="text-[#0A1D37] mb-4" size={28} />
                            <h3 className="font-black text-[#0A1D37] text-sm uppercase tracking-wide">Account Settings</h3>
                            <p className="text-slate-400 text-xs mt-1 font-medium">Update profile & security</p>
                        </div>
                        <div className="p-8 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <ShieldCheck className="text-green-600 mb-4" size={28} />
                            <h3 className="font-black text-[#0A1D37] text-sm uppercase tracking-wide">Support</h3>
                            <p className="text-slate-400 text-xs mt-1 font-medium">Contact Cleanico Help Desk</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}