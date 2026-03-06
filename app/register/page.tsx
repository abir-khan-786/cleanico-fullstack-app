"use client";

import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { authClient } from '@/src/lib/auth-client';
import toast from 'react-hot-toast';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        await authClient.signUp.email({
            email,
            password,
            name,
            callbackURL: "/dashboard",
        }, {
            onRequest: () => setLoading(true),
            onSuccess: () => {
                toast.success('Account created! Welcome to Cleanico.'); // সাকসেস মেসেজ
                router.push("/dashboard");
                router.refresh();
            },
            onError: (ctx) => {
                toast.error(ctx.error.message || "Registration failed"); // এরর মেসেজ
                setLoading(false);
            },
        });
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
        });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 py-16">
            <div className="max-w-lg w-full bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">

                <div className="bg-[#0A1D37] p-10 text-center relative">
                    <div className="relative z-10">
                        <div className="inline-block bg-[#E85A2A] p-2.5 rounded-2xl mb-4 shadow-lg shadow-orange-500/20">
                            <CheckCircle size={32} className="text-white" strokeWidth={3} />
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Join Cleanico</h2>
                        <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-[0.2em]">Professional Cleaning Services</p>
                    </div>
                </div>

                <div className="p-10 space-y-6">


                    <form onSubmit={handleRegister} className="grid grid-cols-1 gap-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#0A1D37] uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E85A2A] transition-colors" size={18} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-semibold text-slate-700 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#0A1D37] uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E85A2A] transition-colors" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="yourname@email.com"
                                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-semibold text-slate-700 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#0A1D37] uppercase tracking-widest ml-1">Secure Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E85A2A] transition-colors" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimum 8 characters"
                                    className="w-full pl-11 pr-12 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-semibold text-slate-700 text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-[#0A1D37] text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 mt-2"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Create Account <ArrowRight size={18} /></>}
                        </button>
                    </form>

                    <div className="relative flex items-center gap-4 py-1">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase">Or use</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-4 rounded-2xl font-bold text-[#0A1D37] hover:bg-slate-50 transition-all active:scale-[0.98] text-sm"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        Google Quick Sign Up
                    </button>

                    <p className="text-center text-slate-500 text-xs font-bold">
                        Already have an account?
                        <Link href="/login" className="text-[#E85A2A] ml-2 hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}