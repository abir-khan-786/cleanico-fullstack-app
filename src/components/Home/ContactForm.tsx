"use client";

import React from 'react';
import { Send, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* ১. কন্টাক্ট ইনফো (বাম পাশ) */}
                <div className="space-y-8">
                    <div>
                        <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">Contact Us</p>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A1D37] mb-6">
                            Get a <span className="text-[#E85A2A]">Free</span> Quote Today
                        </h2>
                        <p className="text-slate-500 font-medium">
                            Have questions or ready to book? Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="bg-orange-50 p-3 rounded-xl text-[#E85A2A]"><Phone size={24} /></div>
                            <div>
                                <h4 className="font-bold text-[#0A1D37]">Call Us</h4>
                                <p className="text-sm text-slate-500">(704) 555-0127</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="bg-orange-50 p-3 rounded-xl text-[#E85A2A]"><Mail size={24} /></div>
                            <div>
                                <h4 className="font-bold text-[#0A1D37]">Email Us</h4>
                                <p className="text-sm text-slate-500">info@cleanico.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-[#0A1D37] rounded-3xl text-white flex items-center gap-6">
                        <Clock className="text-[#E85A2A]" size={40} />
                        <div>
                            <h4 className="font-bold text-xl">Working Hours</h4>
                            <p className="text-slate-400 text-sm tracking-wide uppercase">Mon - Sat: 09:00 AM - 06:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* ২. বুকিং ফর্ম (ডান পাশ) */}
                <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl border border-slate-100">
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-medium"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-medium"
                            />
                        </div>
                        <select className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-medium text-slate-500">
                            <option>Select Service</option>
                            <option>House Cleaning</option>
                            <option>Office Cleaning</option>
                            <option>Window Washing</option>
                        </select>
                        <textarea
                            placeholder="Your Message or Address"
                            rows={4}
                            className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#E85A2A] focus:bg-white outline-none transition-all font-medium"
                        ></textarea>

                        <button className="w-full bg-[#E85A2A] text-white py-5 rounded-2xl font-black text-lg shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                            Send Request <Send size={20} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}