import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const WritingWorkflow = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        Writing Your eBook Content
                    </h2>
                    <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed">
                        We break down the entire workflow for you, from ideation to publication. Automateed even shows you best practices to ensure a polished final product, whether you're writing compelling stories, short manuals, or launching online courses.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
                    {/* Left Card: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-slate-50/50 rounded-[2.5rem] p-10 flex flex-col justify-center border border-slate-100"
                    >
                        <p className="text-lg text-slate-600 leading-relaxed mb-10">
                            It's AI for ebook creation made simple, helping you organize your ideas step by step so you can keep track of your progress and produce ebooks from scratch in record time.
                        </p>
                        <button className="w-fit px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-black hover:scale-105 transition-transform flex items-center gap-2">
                            Get your own book →
                        </button>
                    </motion.div>

                    {/* Right Card: Icon Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2.5rem] p-10 flex flex-col items-center justify-center border border-indigo-100/50"
                    >
                        <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center text-purple-600 mb-6">
                            <BookOpen className="w-12 h-12" />
                        </div>
                        <span className="text-indigo-600 font-bold text-lg">From Idea to eBook</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
