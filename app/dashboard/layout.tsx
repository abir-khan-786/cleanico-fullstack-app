"use client";

import React, { useState } from 'react';
import { authClient } from "@/src/lib/auth-client";
import {
    LayoutDashboard, User, Calendar,
    Settings, LogOut, Menu, X, Bell, Search
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/dashboard' },
        { name: 'Bookings', icon: <Calendar size={20} />, href: '/dashboard/bookings' },
        { name: 'Profile', icon: <User size={20} />, href: '/dashboard/profile' },
        { name: 'Settings', icon: <Settings size={20} />, href: '/dashboard/settings' },
    ];

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out!");
                    router.push("/login");
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* সাইডবার (ডেস্কটপ) */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0A1D37] text-white transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="bg-[#E85A2A] p-2 rounded-xl shadow-lg shadow-orange-600/20">
                            <LayoutDashboard className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-black tracking-tight">Cleanico</span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${pathname === item.href ? 'bg-[#E85A2A] text-white' : 'hover:bg-white/5 text-slate-400'}`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-500/10 transition-all mt-auto"
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            {/* মেইন কন্টেন্ট */}
            <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
                {/* টপ হেডার */}
                <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-slate-500">
                        {isSidebarOpen ? <X /> : <Menu />}
                    </button>

                    <div className="hidden md:flex items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 w-96 group focus-within:border-[#E85A2A] transition-all">
                        <Search className="text-slate-400" size={18} />
                        <input type="text" placeholder="Search for bookings..." className="bg-transparent border-none outline-none px-3 text-sm font-medium w-full" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-[#E85A2A] rounded-full"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-100 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-[#0A1D37] leading-none">{session?.user?.name}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Client Account</p>
                            </div>
                            <img src={session?.user?.image || "https://avatar.iran.liara.run/public"} className="w-10 h-10 rounded-xl border-2 border-slate-50 shadow-sm" alt="User" />
                        </div>
                    </div>
                </header>

                <div className="p-8 flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}