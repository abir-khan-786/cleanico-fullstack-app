"use client";

import React from 'react';
import { authClient } from "@/src/lib/auth-client";
import { User, Mail, ShieldCheck, MapPin, Phone, Camera } from 'lucide-react';

export default function ProfilePage() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                    <div className="relative group">
                        <img
                            src={user?.image || "https://avatar.iran.liara.run/public"}
                            className="w-40 h-40 rounded-[48px] border-8 border-slate-50 object-cover shadow-inner"
                            alt="Profile"
                        />
                        <button className="absolute bottom-2 right-2 bg-[#E85A2A] text-white p-3 rounded-2xl shadow-lg hover:scale-110 transition-all">
                            <Camera size={20} />
                        </button>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl font-black text-[#0A1D37] leading-none mb-2">{user?.name}</h2>
                        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            <Mail size={16} /> {user?.email}
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="px-5 py-2 bg-green-50 text-green-600 text-xs font-black uppercase rounded-full border border-green-100 flex items-center gap-2">
                                <ShieldCheck size={14} /> Verified Member
                            </span>
                            <span className="px-5 py-2 bg-orange-50 text-[#E85A2A] text-xs font-black uppercase rounded-full border border-orange-100">
                                Gold Tier
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[32px] p-8 border border-slate-100">
                    <h3 className="text-lg font-black text-[#0A1D37] mb-6">Personal Details</h3>
                    <div className="space-y-6">
                        <DetailItem icon={<User />} label="Full Name" value={user?.name || "N/A"} />
                        <DetailItem icon={<Phone />} label="Phone Number" value="+880 1XXX XXXXXX" />
                        <DetailItem icon={<MapPin />} label="Primary Address" value="Dhaka, Bangladesh" />
                    </div>
                </div>
                <div className="bg-[#0A1D37] rounded-[32px] p-8 text-white">
                    <h3 className="text-lg font-black mb-6">Account Activity</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between">
                            <span className="text-slate-400 font-bold text-xs uppercase">Total Bookings</span>
                            <span className="font-black">14 Services</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between">
                            <span className="text-slate-400 font-bold text-xs uppercase">Spend This Month</span>
                            <span className="font-black text-[#E85A2A]">$420.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#E85A2A]">
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{label}</p>
                <p className="text-sm font-bold text-[#0A1D37] mt-1">{value}</p>
            </div>
        </div>
    );
}