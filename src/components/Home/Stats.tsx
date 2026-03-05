const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Homes Cleaned", value: "2.5k" },
    { label: "Happy Clients", value: "99%" },
    { label: "Expert Cleaners", value: "50+" },
];

export default function Stats() {
    return (
        <div className="bg-[#E85A2A] py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <h3 className="text-3xl md:text-4xl font-black mb-1">{stat.value}</h3>
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}