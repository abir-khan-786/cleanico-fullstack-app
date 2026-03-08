"use client";

import React from 'react';
import { Bell, Lock, Globe, CreditCard, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="max-w-3xl space-y-8">
            <div>
                <h2 className="text-2xl font-black text-[#0A1D37]">Settings</h2>
                <p className="text-slate-400 font-medium text-sm">Configure your preferences and security.</p>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
                <SettingsLink icon={<Lock className="text-blue-500" />} title="Password & Security" desc="Update your password and 2FA" />
                <SettingsLink icon={<Bell className="text-[#E85A2A]" />} title="Notifications" desc="Manage alerts and email preferences" />
                <SettingsLink icon={<CreditCard className="text-green-500" />} title="Payment Methods" desc="Manage your saved cards" />
                <SettingsLink icon={<Globe className="text-purple-500" />} title="Language & Region" desc="English (US) - Dhaka, BD" last />
            </div>

            <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex items-center justify-between">
                <div>
                    <h4 className="font-black text-red-600">Danger Zone</h4>
                    <p className="text-red-400 text-xs font-medium">Once you delete your account, there is no going back.</p>
                </div>
                <button className="bg-white text-red-600 px-6 py-3 rounded-2xl font-black text-xs border border-red-200 hover:bg-red-600 hover:text-white transition-all">
                    Delete Account
                </button>
            </div>
        </div>
    );
}

function SettingsLink({ icon, title, desc, last = false }: { icon: any, title: string, desc: string, last?: boolean }) {
    return (
        <div className={`p-6 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group ${!last && 'border-b border-slate-50'}`}>
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h4 className="font-black text-[#0A1D37] text-sm">{title}</h4>
                    <p className="text-slate-400 text-xs font-medium">{desc}</p>
                </div>
            </div>
            <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
        </div>
    );
}