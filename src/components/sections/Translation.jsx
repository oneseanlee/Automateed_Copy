import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, CheckCircle2, FileJson, Languages } from 'lucide-react';

const languages = [
    { name: "English", icon: "🇺🇸" },
    { name: "Español", icon: "🇪🇸" },
    { name: "Deutsch", icon: "🇩🇪" },
    { name: "Français", icon: "🇫🇷" },
    { name: "Português", icon: "🇵🇹" },
    { name: "Italiano", icon: "🇮🇹" },
    { name: "中文", icon: "🇨🇳" },
    { name: "日本語", icon: "🇯🇵" },
];

export const Translation = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                            New
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight">
                            Translate Your Book <br /> in One Click
                        </h2>

                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Convert your ebook into virtually any language while preserving formatting, styles, and chapter structure.
                        </p>

                        <div className="space-y-6">
                            <div className="flex bg-white items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <span className="text-slate-600 font-bold">100+ languages supported</span>
                            </div>

                            <div className="flex bg-white items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-slate-600 font-bold">Keeps headings, chapters, and typography intact</span>
                            </div>

                            <div className="flex bg-white items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                    <FileJson className="w-5 h-5" />
                                </div>
                                <span className="text-slate-600 font-bold">Optimized for PDF and DOCX export</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Language Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-2xl shadow-indigo-200">
                            {/* Decorative background shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                            <div className="relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    {languages.map((lang, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg hover:translate-y-[-4px] transition-all duration-300"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-indigo-600">
                                                <Languages className="w-4 h-4" />
                                            </div>
                                            <span className="font-bold text-slate-800">{lang.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-white/70 text-sm font-medium">
                                        Available in the editor under: <span className="text-white font-bold">Menu → Translate Book</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
