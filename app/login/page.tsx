"use client";

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { authClient } from '@/src/lib/auth-client';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        await authClient.signIn.email({
            email,
            password,
            callbackURL: "/dashboard",
        }, {
            onRequest: () => {
                setLoading(true);
            },
            onSuccess: () => {
                toast.success('Successfully logged in!'); // সাকসেস মেসেজ
                router.push("/dashboard");
                router.refresh();
            },
            onError: (ctx) => {
                toast.error(ctx.error.message || "Invalid credentials"); // এরর মেসেজ
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
        <section className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 py-12">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">

                {/* হেডার সেকশন */}
                <div className="bg-[#0A1D37] p-10 text-center relative">
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-[#E85A2A] p-2.5 rounded-2xl mb-4 shadow-lg shadow-orange-500/20">
                            <CheckCircle size={32} className="text-white" strokeWidth={3} />
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Welcome Back</h2>
                        <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-[0.2em]">Cleanico Member Portal</p>
                    </div>
                </div>

                <div className="p-10 space-y-6">


                    {/* ইমেইল ও পাসওয়ার্ড ফর্ম */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#0A1D37] uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E85A2A] transition-colors" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-[11px] font-black text-[#0A1D37] uppercase tracking-widest">Password</label>
                                <Link href="/forgot-password" className="text-[10px] font-bold text-[#E85A2A] hover:underline uppercase tracking-widest">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E85A2A] transition-colors" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-semibold text-slate-700 text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0A1D37]"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-[#E85A2A] disabled:opacity-70 text-white py-4 rounded-2xl font-black text-sm shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Sign In Now <ArrowRight size={18} /></>}
                        </button>
                    </form>

                    {/* গুগোল লগইন */}
                    <div className="relative flex items-center gap-4 py-2">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Or continue with</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-4 rounded-2xl font-bold text-[#0A1D37] hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-[0.98]"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        <span className="text-sm">Google Account</span>
                    </button>

                    <p className="text-center text-slate-500 text-xs font-bold pt-4">
                        Don&apos;t have an account?
                        <Link href="/register" className="text-[#E85A2A] ml-2 hover:underline underline-offset-4">Create One</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}