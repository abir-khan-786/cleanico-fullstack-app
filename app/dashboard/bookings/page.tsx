"use client";

import React from 'react';
import { Calendar, Clock, MapPin, MoreVertical, Plus } from 'lucide-react';

export default function BookingsPage() {
    const bookings = [
        { id: '#BK-9021', service: 'Deep House Cleaning', date: 'March 12, 2026', time: '10:00 AM', status: 'Upcoming', price: '$85.00' },
        { id: '#BK-8842', service: 'Kitchen Sanitizing', date: 'March 05, 2026', time: '02:30 PM', status: 'Completed', price: '$45.00' },
        { id: '#BK-8710', service: 'Sofa & Carpet Cleaning', date: 'Feb 28, 2026', time: '11:00 AM', status: 'Completed', price: '$120.00' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black text-[#0A1D37]">My Bookings</h2>
                    <p className="text-slate-400 font-medium text-sm">Manage your cleaning schedules and history.</p>
                </div>
                <button className="bg-[#E85A2A] text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                    <Plus size={18} /> New Booking
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {bookings.map((booking) => (
                    <div key={booking.id} className="bg-white p-6 rounded-[32px] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-all group">
                        <div className="flex items-center gap-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${booking.status === 'Upcoming' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                                <Calendar size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h4 className="font-black text-[#0A1D37]">{booking.service}</h4>
                                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-slate-400 text-xs font-bold">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {booking.date} at {booking.time}</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> Home Office</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-4 md:pt-0">
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</p>
                                <p className="text-lg font-black text-[#0A1D37]">{booking.price}</p>
                            </div>
                            <button className="p-2 text-slate-300 hover:text-[#0A1D37] transition-colors">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}