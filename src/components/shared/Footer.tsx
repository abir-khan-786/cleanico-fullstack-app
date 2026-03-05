import { Facebook, Instagram, Twitter, CheckCircle } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0A1D37] text-white pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Info */}
                <div className="space-y-6">
                    <div className="text-2xl font-black flex items-center gap-2">
                        <div className="bg-[#E85A2A] p-1 rounded-sm">
                            <CheckCircle size={20} className="text-white" />
                        </div>
                        Cleanico
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Top-rated professional cleaning services across the country. We make your space shine like never before.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-[#E85A2A] transition"><Facebook size={18} /></a>
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-[#E85A2A] transition"><Instagram size={18} /></a>
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-[#E85A2A] transition"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-[#E85A2A]">Our Services</h4>
                    <ul className="text-slate-400 text-sm space-y-3 font-medium">
                        <li className="hover:text-white cursor-pointer transition">Residential Cleaning</li>
                        <li className="hover:text-white cursor-pointer transition">Commercial Cleaning</li>
                        <li className="hover:text-white cursor-pointer transition">Carpet & Window</li>
                        <li className="hover:text-white cursor-pointer transition">Deep Sanitizing</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-[#E85A2A]">Company</h4>
                    <ul className="text-slate-400 text-sm space-y-3 font-medium">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Us</li>
                        <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-[#E85A2A]">Newsletter</h4>
                    <p className="text-slate-400 text-xs mb-4">Stay updated with our latest offers.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E85A2A]"
                        />
                        <button className="bg-[#E85A2A] py-3 rounded font-bold text-sm hover:bg-orange-600 transition shadow-lg">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-[12px] font-medium uppercase tracking-widest">
                © 2026 Cleanico Services. All rights reserved.
            </div>
        </footer>
    );
};