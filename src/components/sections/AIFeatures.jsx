import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Lightbulb, Gift } from 'lucide-react';

export const AIFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        No.1 AI eBook Creator
                    </h2>
                    <p className="text-xl font-bold text-[#0f172a] mb-4">
                        What once took weeks—or months—now takes less than 15 minutes.
                    </p>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Automateed helps you write your next book by automating AI text production and design.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Top Row: Simple Cards */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100/50 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-800 mb-1">No experience in writing?</h4>
                                <p className="text-emerald-600 font-black">No problem.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-800 mb-1">No time?</h4>
                                <p className="text-blue-600 font-black">No problem.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Row: Large Detail Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-black text-[#0f172a] leading-tight">
                                        Empower Niche, Subniche, Topic, Title, or Outline Creation
                                    </h4>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We don't just provide AI to generate your chapters; we help you choose your subniche, define the ebook topic, and even tailor your content to capture your brand's voice.
                                </p>
                            </div>
                            <div className="w-full md:w-48 h-48 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-200">
                                <Lightbulb className="w-24 h-24" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row-reverse gap-8 items-center"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <Gift className="w-5 h-5 font-bold" />
                                    </div>
                                    <h4 className="text-lg font-black text-[#0f172a] leading-tight">
                                        🎁 Over 50 Marketing Tasks for High-Quality Ebooks
                                    </h4>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Automateed isn't just a tool for creating content. It's an all-in-one platform that suggests marketing angles to boost ebook sales. From building lead magnets to planning email campaigns, we cover it all.
                                </p>
                            </div>
                            <div className="w-full md:w-48 h-48 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-200">
                                <Gift className="w-24 h-24" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
