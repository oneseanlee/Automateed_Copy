import React from 'react';
import { motion } from 'framer-motion';

const templates = [
    { name: "Modern Minimalist", badge: "modern", colors: ["bg-blue-600", "bg-slate-600", "bg-indigo-50"] },
    { name: "Elegant Serif", badge: "elegant", colors: ["bg-slate-800", "bg-orange-600", "bg-orange-100"] },
    { name: "Creative Studio", badge: "creative", colors: ["bg-purple-600", "bg-pink-600", "bg-purple-50"] },
    { name: "Corporate Professional", badge: "professional", colors: ["bg-indigo-800", "bg-blue-600", "bg-indigo-50"] },
    { name: "Nature Inspired", badge: "nature", colors: ["bg-green-700", "bg-lime-600", "bg-green-50"] },
    { name: "Luxury Edition", badge: "luxury", colors: ["bg-[#78350f]", "bg-[#b45309]", "bg-[#fef3c7]"] },
    { name: "Academic Journal", badge: "academic", colors: ["bg-blue-800", "bg-slate-600", "bg-blue-50"] },
    { name: "Magazine Style", badge: "magazine", colors: ["bg-red-700", "bg-orange-500", "bg-orange-100"] },
];

export const PdfTemplates = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        Included PDF Templates
                    </h2>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                        Choose from professional, print-optimized styles ready for clean PDF export.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {templates.map((template, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="max-w-[70%]">
                                        <h4 className="text-xl font-black text-[#0f172a] leading-tight mb-1">
                                            {template.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            {template.name} {template.name}
                                        </p>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase">
                                        {template.badge}
                                    </span>
                                </div>

                                {/* Template Preview Mockup */}
                                <div className="aspect-[4/5] bg-slate-50 rounded-lg p-6 mb-6 flex flex-col gap-3 group-hover:bg-slate-100 transition-colors">
                                    <div className="h-2 w-2/3 bg-blue-600 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                                        <div className="h-1.5 w-4/5 bg-slate-200 rounded-full" />
                                    </div>
                                    <div className="h-24 w-full bg-white rounded-md border border-slate-100 shadow-sm mt-2 flex items-center justify-center">
                                        <div className="w-4/5 h-4/5 border-2 border-slate-50 rounded flex flex-col gap-2 p-2">
                                            <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
                                            <div className="h-1 w-full bg-slate-50 rounded" />
                                            <div className="h-1 w-full bg-slate-50 rounded" />
                                        </div>
                                    </div>
                                </div>

                                {/* Palette Indicators */}
                                <div className="flex gap-2">
                                    {template.colors.map((color, cIdx) => (
                                        <div key={cIdx} className={`w-6 h-6 rounded-md ${color} shadow-inner cursor-help hover:scale-110 transition-transform`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
