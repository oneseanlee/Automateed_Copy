import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, RefreshCw, Layers, Star } from 'lucide-react';

export const AppDownload = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 overflow-hidden border border-slate-50 min-h-[500px]">

                    {/* Left Side: Content */}
                    <div className="flex-1 p-12 lg:p-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-8">
                            <Smartphone className="w-3 h-3" />
                            Now on Android
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] mb-8 leading-[1.1]">
                            Create eBooks From Anywhere <span className="inline-block w-4 h-12 bg-indigo-900 ml-1 translate-y-2" />
                        </h2>

                        <p className="text-slate-500 font-bold mb-10 text-sm leading-relaxed max-w-lg">
                            Download our Android app and create professional AI-powered eBooks directly from your phone or tablet.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                { icon: <Zap className="w-4 h-4 text-emerald-500" />, text: "Same powerful features as web version" },
                                { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Sync across all your devices" },
                                { icon: <Layers className="w-4 h-4 text-purple-500" />, text: "Mobile-optimized interface" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                                    <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                                        {item.icon}
                                    </div>
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-3 px-10 py-5 bg-[#4361ee] text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-[#3f37c9] hover:scale-105 transition-all">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M17.523 15.3414L20.3551 18.1735L17.523 21.0056V15.3414ZM3.6449 3.01258C3.5583 3.01358 3.47353 3.03361 3.39626 3.07127C3.31899 3.10893 3.25102 3.16335 3.19702 3.23077C3.12519 3.32569 3.0844 3.44111 3.08003 3.56158V20.4384C3.0844 20.5589 3.12519 20.6743 3.19702 20.7692C3.25102 20.8366 3.31899 20.8911 3.39626 20.9287C3.47353 20.9664 3.5583 20.9864 3.6449 20.9874C3.77443 20.9839 3.90076 20.9416 4.0049 20.8664L18.667 12.4384C18.7738 12.3807 18.8631 12.2961 18.9248 12.1942C18.9864 12.0924 19.0182 11.9768 19.0163 11.8592C19.0163 11.7416 18.9845 11.626 18.9228 11.5242C18.8612 11.4223 18.7719 11.3378 18.6651 11.28L4.0049 2.13358C3.90076 2.05836 3.77443 2.01608 3.6449 2.01258V3.01258Z" />
                            </svg>
                            Download on Google Play
                        </button>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="flex-1 min-h-[400px] h-full bg-gradient-to-br from-[#4361ee] via-[#7209b7] to-[#f72585] relative flex items-center justify-center">
                        {/* Decorative Icons instead of QR */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-64 h-[450px] bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-white/20 rounded-full" />
                                <div className="pt-20 px-6">
                                    <div className="w-full h-32 bg-white/5 rounded-2xl mb-4" />
                                    <div className="w-2/3 h-4 bg-white/10 rounded-full mb-3" />
                                    <div className="w-full h-4 bg-white/10 rounded-full mb-3" />
                                    <div className="w-1/2 h-4 bg-white/10 rounded-full mb-8" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="aspect-square bg-white/5 rounded-xl" />
                                        <div className="aspect-square bg-white/5 rounded-xl" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />)}
                                    </div>
                                    <span className="text-[10px] font-bold">4.9/5</span>
                                </div>
                                <div className="text-[8px] opacity-70">Rating on Google Play</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
