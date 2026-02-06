import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, PenTool, FileDown, Zap, Globe, Star } from 'lucide-react';

export const ExpandFeatures = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-6 border border-purple-100 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-purple-600" />
                        Powerful Features
                        <div className="flex gap-0.5 ml-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-500" />
                            ))}
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
                        Everything You Need to Create <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Professional eBooks</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        From AI-powered content generation to stunning visuals and professional formatting, we've got every aspect of eBook creation covered.
                    </p>
                </div>

                {/* Alternating Feature Blocks */}
                <div className="space-y-32 max-w-6xl mx-auto">
                    {/* Feature 1: AI Content Generation */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black text-[#0f172a] mb-6">AI Content Generation</h3>
                            <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                Generate comprehensive chapters with our advanced AI that understands context and maintains consistency throughout your book.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full"
                        >
                            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                                <div className="relative z-10 aspect-square flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-1 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full bg-[#030712]/10 backdrop-blur-3xl flex items-center justify-center">
                                            {/* AI Brain Icon Mockup */}
                                            <svg viewBox="0 0 100 100" className="w-24 h-24 text-white">
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" className="animate-spin-slow" />
                                                <path d="M50 20 L50 80 M20 50 L80 50 M30 30 L70 70 M30 70 L70 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <circle cx="50" cy="50" r="15" fill="white" className="animate-pulse" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Abstract UI Elements */}
                                    <div className="absolute top-1/2 right-12 h-0.5 w-12 bg-white/50 rounded-full" />
                                    <div className="absolute top-[calc(1/2*100%+8px)] right-12 h-0.5 w-8 bg-white/50 rounded-full" />
                                    <div className="absolute top-[calc(1/2*100%-8px)] right-12 h-0.5 w-8 bg-white/50 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Feature 2: Stunning Visuals */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 shadow-sm border border-purple-100">
                                <Palette className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black text-[#0f172a] mb-6">Stunning Visuals</h3>
                            <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                Create professional covers and chapter illustrations with AI-generated images that perfectly match your content.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full"
                        >
                            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />
                                <div className="relative z-10 aspect-square flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-[2rem] bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-1 flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-all duration-500">
                                        <div className="w-full h-full rounded-[1.8rem] bg-white/10 backdrop-blur-2xl flex flex-col items-center justify-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white">
                                                <PenTool className="w-6 h-6 rotate-45" />
                                            </div>
                                            <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ x: -100 }}
                                                    whileInView={{ x: 100 }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="w-1/2 h-full bg-white"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="w-8 h-1 bg-white/30 rounded-full" />
                                                <div className="w-12 h-1 bg-white/30 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Feature 3: Smart Editor */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 shadow-sm border border-emerald-100">
                                <PenTool className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black text-[#0f172a] mb-6">Smart Editor</h3>
                            <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                Refine your content with our intuitive editor that includes formatting, structure suggestions, and style optimization.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full"
                        >
                            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl overflow-hidden group">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                                <div className="relative z-10 aspect-square flex items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-500 p-0.5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center gap-1 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent" />
                                            <div className="relative z-10 flex flex-col items-center gap-2">
                                                <svg viewBox="0 0 100 100" className="w-24 h-24 text-cyan-400">
                                                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" className="opacity-30" />
                                                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="180 40" className="rotate-[-45deg]" />
                                                    <path d="M40 50 L60 50 M50 40 L50 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-0" />
                                                    <image href="https://img.icons8.com/isometric/50/image.png" x="25" y="25" width="50" height="50" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Mini Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-32 border-t border-slate-100 pt-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-sm border border-orange-100">
                            <FileDown className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0f172a] mb-4">Multiple Formats</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Export your finished eBook in PDF, EPUB, MOBI, and other popular formats for any platform or device.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-sm border border-yellow-100">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0f172a] mb-4">Lightning Fast</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Complete your entire eBook in under 10 minutes with our streamlined workflow and powerful AI processing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-all shadow-sm border border-blue-100">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0f172a] mb-4">Global Reach</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Create content in multiple languages and optimize for international markets with built-in localization tools.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
