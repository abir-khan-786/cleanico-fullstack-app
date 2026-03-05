import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Sarah Johnson",
        role: "Home Owner",
        text: "Cleanico did an amazing job! My house has never been this clean. The team was professional and very detail-oriented.",
        image: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Office Manager",
        text: "We hired them for our office cleaning and the results were outstanding. Highly recommend their commercial services.",
        image: "https://i.pravatar.cc/150?u=michael",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Apartment Resident",
        text: "Fast, reliable, and eco-friendly. I love that they use safe products for my pets. Will definitely book again!",
        image: "https://i.pravatar.cc/150?u=emily",
        rating: 5
    }
];

export default function Reviews() {
    return (
        <section className="py-24 px-6 bg-[#0A1D37] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#E85A2A] font-black text-xs uppercase tracking-[0.3em] mb-4">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        What our <span className="text-[#E85A2A]">clients</span> say
                    </h2>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Quote Icon Decoration */}
                            <Quote className="absolute top-6 right-8 text-white/10 group-hover:text-[#E85A2A]/20 transition-colors" size={48} />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#E85A2A]" className="text-[#E85A2A]" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-300 font-medium mb-8 leading-relaxed italic">
                                {review.text}
                            </p>

                            {/* Profile Info */}
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full border-2 border-[#E85A2A]"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-xs text-[#E85A2A] font-bold uppercase tracking-wider">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}